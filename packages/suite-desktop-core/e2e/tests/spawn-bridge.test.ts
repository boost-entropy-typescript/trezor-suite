import { test as testPlaywright, expect as expectPlaywright } from '@playwright/test';

import { TrezorUserEnvLink } from '@trezor/trezor-user-env-link';

import { launchSuite, waitForDataTestSelector } from '../support/common';

testPlaywright.describe.serial('Bridge', () => {
    const expectedBridgeVersion = '2.0.33';
    testPlaywright.beforeAll(async () => {
        // We make sure that bridge from trezor-user-env is stopped.
        // So we properly test the electron app starting node-bridge module.
        await TrezorUserEnvLink.connect();
        await TrezorUserEnvLink.stopBridge();
    });

    testPlaywright('App spawns bundled bridge and stops it after app quit', async ({ request }) => {
        const suite = await launchSuite();
        const title = await suite.window.title();
        expectPlaywright(title).toContain('Trezor Suite');

        // We wait for `@welcome/title` or `@dashboard/graph` since
        // one or the other will be display depending on the state of the app
        // due to previously run tests. And both means the same for the porpoise of this test.
        // Bridge should be ready to check `/status` endpoint.
        await Promise.race([
            waitForDataTestSelector(suite.window, '@welcome/title'),
            waitForDataTestSelector(suite.window, '@dashboard/graph'),
        ]);

        // bridge is running
        const bridgeRes1 = await request.get('http://127.0.0.1:21325/status/');
        await expectPlaywright(bridgeRes1).toBeOK();

        const response = await request.post('http://127.0.0.1:21325/', {
            headers: {
                Origin: 'https://wallet.trezor.io',
            },
        });

        const json = await response.json();
        const { version } = json;
        expectPlaywright(version).toEqual(expectedBridgeVersion);

        await suite.electronApp.close();

        // bridge is not running
        try {
            await request.get('http://127.0.0.1:21325/status/');
            throw new Error('should have thrown!');
        } catch (err) {
            // ok
        }
    });
});
