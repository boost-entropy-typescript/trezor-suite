// origin: https://github.com/trezor/connect/blob/develop/src/js/popup/view/firmwareNotSupported.js

import { UiRequestUnexpectedDeviceMode } from '@trezor/connect';
import { showView } from './common';

export const firmwareNotSupported = (device: UiRequestUnexpectedDeviceMode['payload']) => {
    const view = showView('firmware-not-supported');

    // showView return type has undefined in union (if react component is available);
    if (!view) {
        console.error('view does not exist!');
        return;
    }

    if (!device.features) return;
    const { features } = device;

    const h3 = view.getElementsByTagName('h3')[0];
    h3.innerHTML = `${features.major_version === 1 ? 'Trezor One' : 'Trezor T'} is not supported`;
};
