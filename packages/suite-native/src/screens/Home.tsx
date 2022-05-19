import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View } from 'react-native';

import { Text, Box, Button, NumPadButton, Icon, Hint } from '@trezor/atoms';
import { prepareNativeStyle, useNativeStyles } from '@trezor/styles';

const backgroundStyle = prepareNativeStyle<{ isDarkMode: boolean }>(
    ({ colors, spacings }, { isDarkMode }) => ({
        backgroundColor: isDarkMode ? colors.black : colors.white,
        padding: spacings.lg,
        marginTop: 0,
    }),
);

export const Home = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const { applyStyle } = useNativeStyles();

    return (
        <SafeAreaView style={applyStyle(backgroundStyle, { isDarkMode })}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={applyStyle(backgroundStyle, { isDarkMode })}
            >
                <View>
                    <Box marginTop="lg">
                        <Text variant="titleLarge">Title Large</Text>
                    </Box>
                    <Box>
                        <Text variant="titleMedium">Title Medium</Text>
                    </Box>
                    <Box>
                        <Text variant="titleSmall">Title Small</Text>
                    </Box>
                    <Box>
                        <Text variant="highlight">Highlight</Text>
                    </Box>
                    <Box>
                        <Text variant="body">Body</Text>
                    </Box>
                    <Box>
                        <Text variant="callout">Callout</Text>
                    </Box>
                    <Box>
                        <Text variant="hint">Hint</Text>
                    </Box>
                    <Box>
                        <Text variant="label">Label</Text>
                    </Box>
                    <Box marginVertical="md">
                        <Text>Icon:</Text>
                        <Icon type="warningCircle" size="big" color="black" />
                    </Box>
                    <Box marginVertical="md">
                        <Text>Hints:</Text>
                        <Hint variant="hint">Hned to mažem</Hint>
                        <Hint variant="error">Please enter a valid address dumbo</Hint>
                    </Box>
                    <Box marginVertical="md">
                        <Button onPress={() => {}} size="md" colorScheme="primary">
                            My Fancy Button
                        </Button>
                    </Box>

                    <NumPadButton
                        value={5}
                        onPress={value =>
                            console.log('Press num pad button. No implementation yet.', value)
                        }
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
