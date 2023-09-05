import { useState, useRef } from 'react';
import { Pressable, TextInput, TouchableOpacity } from 'react-native';

import { Icon } from '@suite-common/icons';
import { prepareNativeStyle, useNativeStyles } from '@trezor/styles';

import { Box } from '../Box';

type InputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    isDisabled?: boolean;
    maxLength?: number;
};

const inputStyle = prepareNativeStyle(utils => ({
    ...utils.typography.body,
    flex: 1,
    color: utils.colors.textOnTertiary,
    marginLeft: utils.spacings.medium,
    lineHeight: 0,
}));

type InputStyleProps = {
    isFocused: boolean;
};
const inputWrapperStyle = prepareNativeStyle<InputStyleProps>((utils, { isFocused }) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 48,
    borderWidth: utils.borders.widths.small,
    borderRadius: utils.borders.radii.small,
    borderColor: utils.colors.backgroundNeutralSubtleOnElevation0,
    backgroundColor: utils.colors.backgroundNeutralSubtleOnElevation0,
    paddingLeft: 14,
    paddingRight: 14.25,
    extend: [
        {
            condition: isFocused,
            style: {
                borderColor: utils.colors.borderFocus,
            },
        },
    ],
}));

export const SearchInput = ({
    value,
    onChange,
    placeholder,
    maxLength,
    isDisabled = false,
}: InputProps) => {
    const { applyStyle, utils } = useNativeStyles();
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const searchInputRef = useRef<TextInput | null>(null);
    const isClearButtonVisible = !!value.length;
    const handleClear = () => {
        onChange('');
    };

    const handleInputFocus = () => {
        searchInputRef?.current?.focus();
    };

    return (
        <Pressable onPress={handleInputFocus}>
            <Box style={applyStyle(inputWrapperStyle, { isFocused })}>
                <Icon name="search" color="iconSubdued" size="large" />
                <TextInput
                    ref={searchInputRef}
                    value={value}
                    onChangeText={onChange}
                    placeholder={placeholder}
                    placeholderTextColor={utils.colors.textSubdued}
                    editable={!isDisabled}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={applyStyle(inputStyle)}
                    maxLength={maxLength}
                />
                {isClearButtonVisible && (
                    <TouchableOpacity onPress={handleClear}>
                        <Icon name="closeCircle" size="large" color="iconSubdued" />
                    </TouchableOpacity>
                )}
            </Box>
        </Pressable>
    );
};
