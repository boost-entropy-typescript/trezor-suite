import React from 'react';

import type { TransportInfo } from '@trezor/connect';

import { SettingsLayout } from '@settings-components';
import { Translation } from '@suite-components';
import { SettingsSection, DeviceBanner } from '@suite-components/Settings';
import { isDeviceRemembered } from '@suite-utils/device';
import { useDevice, useSelector } from '@suite-hooks';
import { getDeviceModel } from '@trezor/device-utils';

import { BackupRecoverySeed } from './BackupRecoverySeed';
import { BackupFailed } from './BackupFailed';
import { CheckRecoverySeed } from './CheckRecoverySeed';
import { FirmwareVersion } from './FirmwareVersion';
import { FirmwareTypeChange } from './FirmwareTypeChange';
import { PinProtection } from './PinProtection';
import { ChangePin } from './ChangePin';
import { Passphrase } from './Passphrase';
import { SafetyChecks } from './SafetyChecks';
import { DeviceLabel } from './DeviceLabel';
import { Homescreen } from './Homescreen';
import { DisplayRotation } from './DisplayRotation';
import { AutoLock } from './AutoLock';
import { WipeDevice } from './WipeDevice';
import { CustomFirmware } from './CustomFirmware';

import type { TrezorDevice } from '@suite-types';

const deviceSettingsUnavailable = (device?: TrezorDevice, transport?: Partial<TransportInfo>) => {
    const noTransportAvailable = transport && !transport.type;
    const wrongDeviceType = device?.type && ['unacquired', 'unreadable'].includes(device.type);
    const wrongDeviceMode =
        (device?.mode && ['seedless', 'initialize'].includes(device.mode)) ||
        device?.features?.recovery_mode;
    const firmwareUpdateRequired = device?.firmware === 'required';

    return noTransportAvailable || wrongDeviceType || wrongDeviceMode || firmwareUpdateRequired;
};

export const SettingsDevice = () => {
    const { device, isLocked } = useDevice();
    const { transport } = useSelector(state => ({
        transport: state.suite.transport,
    }));
    const deviceUnavailable = !device?.features;
    const isDeviceLocked = isLocked();
    const bootloaderMode = device?.mode === 'bootloader';
    const deviceRemembered = isDeviceRemembered(device) && !device?.connected;
    const deviceModel = device ? getDeviceModel(device) : undefined;

    if (deviceSettingsUnavailable(device, transport)) {
        return (
            <SettingsLayout>
                <DeviceBanner
                    title={<Translation id="TR_SETTINGS_DEVICE_BANNER_TITLE_UNAVAILABLE" />}
                    description={
                        <Translation id="TR_SETTINGS_DEVICE_BANNER_DESCRIPTION_UNAVAILABLE" />
                    }
                />
            </SettingsLayout>
        );
    }

    if (deviceUnavailable) {
        return (
            <SettingsLayout>
                <DeviceBanner
                    title={<Translation id="TR_SETTINGS_DEVICE_BANNER_TITLE_DISCONNECTED" />}
                />
            </SettingsLayout>
        );
    }

    const {
        unfinished_backup: unfinishedBackup,
        pin_protection: pinProtection,
        safety_checks: safetyChecks,
    } = device.features;

    return (
        <SettingsLayout>
            {bootloaderMode && (
                <DeviceBanner
                    title={<Translation id="TR_SETTINGS_DEVICE_BANNER_TITLE_BOOTLOADER" />}
                    description={
                        <Translation
                            id={
                                deviceModel === '1'
                                    ? 'TR_SETTINGS_DEVICE_BANNER_DESCRIPTION_BOOTLOADER_MODEL_1'
                                    : 'TR_SETTINGS_DEVICE_BANNER_DESCRIPTION_BOOTLOADER_MODEL_2'
                            }
                        />
                    }
                />
            )}

            {deviceRemembered && (
                <DeviceBanner
                    title={<Translation id="TR_SETTINGS_DEVICE_BANNER_TITLE_REMEMBERED" />}
                />
            )}

            {!bootloaderMode && (
                <SettingsSection title={<Translation id="TR_BACKUP" />} icon="NEWSPAPER">
                    {unfinishedBackup ? (
                        <BackupFailed />
                    ) : (
                        <>
                            <BackupRecoverySeed isDeviceLocked={isDeviceLocked} />
                            <CheckRecoverySeed isDeviceLocked={isDeviceLocked} />
                        </>
                    )}
                </SettingsSection>
            )}

            <SettingsSection title={<Translation id="TR_FIRMWARE" />} icon="FIRMWARE">
                <FirmwareVersion isDeviceLocked={isDeviceLocked} />
                {!bootloaderMode && <FirmwareTypeChange isDeviceLocked={isDeviceLocked} />}
            </SettingsSection>

            {!bootloaderMode && (
                <>
                    <SettingsSection
                        title={<Translation id="TR_DEVICE_SECURITY" />}
                        icon="SHIELD_CHECK"
                    >
                        <PinProtection isDeviceLocked={isDeviceLocked} />
                        {pinProtection && <ChangePin isDeviceLocked={isDeviceLocked} />}
                        <Passphrase isDeviceLocked={isDeviceLocked} />
                        {safetyChecks && <SafetyChecks isDeviceLocked={isDeviceLocked} />}
                    </SettingsSection>

                    <SettingsSection title={<Translation id="TR_PERSONALIZATION" />} icon="PALETTE">
                        <DeviceLabel isDeviceLocked={isDeviceLocked} />
                        <Homescreen isDeviceLocked={isDeviceLocked} />
                        {deviceModel !== '1' && <DisplayRotation isDeviceLocked={isDeviceLocked} />}
                        {pinProtection && <AutoLock isDeviceLocked={isDeviceLocked} />}
                    </SettingsSection>
                </>
            )}

            <SettingsSection title={<Translation id="TR_ADVANCED" />} icon="GHOST">
                <WipeDevice isDeviceLocked={isDeviceLocked} />
                <CustomFirmware />
            </SettingsSection>
        </SettingsLayout>
    );
};
