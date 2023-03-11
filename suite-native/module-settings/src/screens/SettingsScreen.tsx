import React from 'react';

import { VStack } from '@suite-native/atoms';
import { Screen } from '@suite-native/navigation';

import { ApplicationSettings } from '../components/ApplicationSettings';
import { SupportSettings } from '../components/SupportSettings';

export const SettingsScreen = () => (
    <Screen>
        <VStack spacing="xxl">
            <ApplicationSettings />
            <SupportSettings />
        </VStack>
    </Screen>
);
