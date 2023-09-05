import { MouseEventHandler } from 'react';
import { Button } from '@trezor/components';

import { Translation, TroubleshootingTips } from 'src/components/suite';
import { useDevice, useDispatch } from 'src/hooks/suite';
import { acquireDevice } from 'src/actions/suite/suiteActions';
import { isDesktop } from '@trezor/env-utils';

export const DeviceAcquire = () => {
    const { isLocked } = useDevice();
    const dispatch = useDispatch();

    const isDeviceLocked = isLocked();

    const handleClick: MouseEventHandler = e => {
        e.stopPropagation();
        dispatch(acquireDevice());
    };

    const ctaButton = (
        <Button data-test="@device-acquire" isLoading={isDeviceLocked} onClick={handleClick}>
            <Translation id="TR_ACQUIRE_DEVICE" />
        </Button>
    );

    const tips = [
        {
            key: 'device-acquire',
            heading: <Translation id="TR_TROUBLESHOOTING_CLOSE_TABS" />,
            description: (
                <Translation
                    id={
                        isDesktop()
                            ? 'TR_TROUBLESHOOTING_CLOSE_TABS_DESCRIPTION_DESKTOP'
                            : 'TR_TROUBLESHOOTING_CLOSE_TABS_DESCRIPTION'
                    }
                />
            ),
        },
        {
            key: 'device-reconnect',
            heading: <Translation id="TR_RECONNECT_YOUR_DEVICE" />,
            description: (
                <Translation
                    id={
                        isDesktop()
                            ? 'TR_RECONNECT_DEVICE_DESCRIPTION_DESKTOP'
                            : 'TR_RECONNECT_DEVICE_DESCRIPTION'
                    }
                />
            ),
        },
    ];

    return (
        <TroubleshootingTips
            label={<Translation id="TR_ACQUIRE_DEVICE_TITLE" />}
            cta={ctaButton}
            items={tips}
        />
    );
};
