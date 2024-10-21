import styled from 'styled-components';

import { Button } from '@trezor/components';

import * as trezorConnectActions from '../actions/trezorConnectActions';
import { useSelector, useActions } from '../hooks';
import { getField } from '../components/Method';
import { isBetaOnly } from '../components/BetaOnly';

export const SettingsContent = styled.section`
    flex: 1;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
`;

export const ConfirmationMessage = styled.div`
    margin-top: 20px;
    color: green;
    font-weight: bold;
`;

export const ErrorMessage = styled(ConfirmationMessage)`
    color: red;
`;

export const Settings = () => {
    const connectOptions = useSelector(state => ({
        trustedHost: state.connect?.options?.trustedHost,
        connectSrc: state.connect?.options?.connectSrc,
        coreMode: state?.connect?.options?.coreMode,
    }));

    const initError = useSelector(state => state.connect?.initError);
    const isInitSuccess = useSelector(state => state.connect?.isInitSuccess || false);
    const isHandshakeConfirmed = useSelector(state => state.connect?.isHandshakeConfirmed || false);
    const actions = useActions({
        onSubmitInit: trezorConnectActions.onSubmitInit,
        onFieldChange: trezorConnectActions.onConnectOptionChange,
    });

    const submitButton = 'Init Connect';
    const fields = [
        {
            name: 'trustedHost',
            type: 'checkbox' as const,
            key: 'trustedHost',
            value: connectOptions?.trustedHost || false,
        },
        {
            name: 'coreMode',
            type: 'select' as const,
            key: 'coreMode',
            value: connectOptions?.coreMode || 'auto',
            data: [
                { value: 'auto', label: 'Auto' },
                { value: 'iframe', label: 'Iframe' },
                { value: 'popup', label: 'Popup' },
                ...(isBetaOnly ? [{ value: 'deeplink', label: 'Deeplink (mobile)' }] : []),
            ],
        },
        {
            name: 'connectSrc',
            type: 'input' as const,
            key: 'connectSrc',
            value: connectOptions?.connectSrc || '',
        },
    ];

    return (
        <SettingsContent>
            {/* @ts-expect-error: actions is simplified for this case */}
            {fields.map(field => getField(field, { actions }))}
            <Button onClick={actions.onSubmitInit} data-testid="@submit-button">
                {submitButton}
            </Button>
            {initError && (
                <ErrorMessage data-testid="@settings/init-error">
                    Init error: {initError}
                </ErrorMessage>
            )}
            {isInitSuccess && (
                <ConfirmationMessage data-testid="@settings/init-success">
                    Init success!
                </ConfirmationMessage>
            )}
            {isHandshakeConfirmed && (
                <ConfirmationMessage data-testid="@settings/handshake-confirmed">
                    Handshake confirmed!
                </ConfirmationMessage>
            )}
        </SettingsContent>
    );
};
