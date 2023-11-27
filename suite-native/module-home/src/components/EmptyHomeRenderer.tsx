import { useSelector } from 'react-redux';

import { useIsUsbDeviceConnectFeatureEnabled } from '@suite-native/feature-flags';
import {
    selectAreAllDevicesDisconnectedOrAccountless,
    selectIsSelectedDeviceAuthorized,
    selectIsSelectedDeviceImported,
} from '@suite-common/wallet-core';

import { EmptyPortfolioTrackerState } from './EmptyPortfolioTrackerState';
import { EmptyConnectedDeviceState } from './EmptyConnectedDeviceState';
import { EmptyPortfolioCrossroads } from './EmptyPortfolioCrossroads';

export const EmptyHomeRenderer = () => {
    const { isUsbDeviceConnectFeatureEnabled } = useIsUsbDeviceConnectFeatureEnabled();
    const isDeviceImported = useSelector(selectIsSelectedDeviceImported);
    const isDeviceAuthorized = useSelector(selectIsSelectedDeviceAuthorized);
    const areAllDevicesDisconnectdOrAccountless = useSelector(
        selectAreAllDevicesDisconnectedOrAccountless,
    );

    // Crossroads should be displayed only if there is no real device connected and portfolio tracker has no accounts.
    if (areAllDevicesDisconnectdOrAccountless) {
        return <EmptyPortfolioCrossroads />;
    }

    if (isUsbDeviceConnectFeatureEnabled && !isDeviceImported && isDeviceAuthorized) {
        return <EmptyConnectedDeviceState />;
    }

    return <EmptyPortfolioTrackerState />;
};
