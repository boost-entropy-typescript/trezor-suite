import { isEqual } from '@trezor/utils/src/versionUtils';
import { PROTO } from '../constants';
import { downloadReleasesMetadata } from '../data/downloadReleasesMetadata';
import { FirmwareRelease, VersionArray } from '../types';
import { FirmwareRevisionCheckResult } from '../types/device';
import { calculateRevisionForDevice } from './calculateRevisionForDevice';

type GetOnlineReleaseMetadataParams = {
    firmwareVersion: VersionArray;
    internalModel: string;
};

const getOnlineReleaseMetadata = async ({
    firmwareVersion,
    internalModel,
}: GetOnlineReleaseMetadataParams): Promise<FirmwareRelease | undefined> => {
    const onlineReleases = await downloadReleasesMetadata({ internal_model: internalModel });

    return onlineReleases.find(onlineRelease => isEqual(onlineRelease.version, firmwareVersion));
};

const failFirmwareRevisionCheck = (
    error: 'revision-mismatch' | 'firmware-version-unknown' | 'firmware-version-unknown',
): FirmwareRevisionCheckResult => ({ success: false, error });

export type CheckFirmwareRevisionParams = {
    firmwareVersion: VersionArray;
    internalModel: PROTO.DeviceModelInternal;
    deviceRevision: string | null;
    expectedRevision: string | undefined;
};

type DoRevisionsMatchParams = {
    deviceRevision: string | null;
    expectedCommitRevision: string;
    firmwareVersion: VersionArray;
};

const doRevisionsMatch = ({
    deviceRevision,
    expectedCommitRevision,
    firmwareVersion,
}: DoRevisionsMatchParams): boolean => {
    if (deviceRevision === null) {
        return false; // defensively, device MUST provide the revision
    }

    const adjustedExpected = calculateRevisionForDevice({
        commitRevision: expectedCommitRevision,
        version: firmwareVersion,
    });

    return adjustedExpected === deviceRevision;
};

export const checkFirmwareRevision = async ({
    firmwareVersion,
    internalModel,
    deviceRevision,
    expectedRevision,
}: CheckFirmwareRevisionParams): Promise<FirmwareRevisionCheckResult> => {
    if (expectedRevision === undefined) {
        if (firmwareVersion.length !== 3) {
            return failFirmwareRevisionCheck('firmware-version-unknown');
        }

        try {
            const onlineRelease = await getOnlineReleaseMetadata({
                firmwareVersion,
                internalModel,
            });

            if (onlineRelease?.firmware_revision === undefined) {
                return failFirmwareRevisionCheck('firmware-version-unknown');
            }

            if (
                !doRevisionsMatch({
                    deviceRevision,
                    expectedCommitRevision: onlineRelease.firmware_revision,
                    firmwareVersion,
                })
            ) {
                return failFirmwareRevisionCheck('revision-mismatch');
            }

            return { success: true };
        } catch (e) {
            return {
                success: false,
                error: 'cannot-perform-check-offline',
            };
        }
    }

    if (
        !doRevisionsMatch({
            deviceRevision,
            expectedCommitRevision: expectedRevision,
            firmwareVersion,
        })
    ) {
        return failFirmwareRevisionCheck('revision-mismatch');
    }

    return { success: true };
};
