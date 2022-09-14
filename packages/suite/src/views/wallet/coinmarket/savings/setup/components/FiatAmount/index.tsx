import React from 'react';
import { InputError } from '@wallet-components';
import styled from 'styled-components';
import { CustomPaymentAmountKey } from '@wallet-constants/coinmarket/savings';
import { Input, variables } from '@trezor/components';
import { Control, Controller, FieldError } from 'react-hook-form';
import { Translation } from '@suite-components';
import { getFiatAmountOptions, StyledSelectBar } from '@wallet-views/coinmarket';
import type { TypedValidationRules } from '@wallet-types/form';

const StyledInput = styled(Input)`
    display: flex;
    margin-top: 12px;
    height: 40px;
`;

const CustomAmountInputErrorWrapper = styled.div`
    font-size: ${variables.FONT_SIZE.TINY};
    color: ${props => props.theme.TYPE_RED};
    margin-top: 6px;
`;

const Label = styled.div`
    padding-right: 20px;
    display: flex;
    align-items: center;
    font-weight: ${variables.FONT_WEIGHT.MEDIUM};
    text-transform: capitalize;
    font-size: ${variables.FONT_SIZE.NORMAL};
    color: ${props => props.theme.TYPE_DARK_GREY};
    margin-bottom: 11px;
`;

interface Props {
    control: Control;
    defaultFiatAmount?: string;
    fiatAmount?: string;
    fiatCurrency?: string;
    paymentAmounts: string[];
    register: (rules?: TypedValidationRules | undefined) => (ref: any) => void;
    minimumPaymentAmountLimit?: number;
    maximumPaymentAmountLimit?: number;
    customFiatAmountError?: FieldError;
}

const FiatAmount = ({
    control,
    defaultFiatAmount,
    fiatAmount,
    fiatCurrency,
    paymentAmounts,
    register,
    minimumPaymentAmountLimit,
    maximumPaymentAmountLimit,
    customFiatAmountError,
}: Props) => (
    <>
        <Label>
            <Translation id="TR_SAVINGS_SETUP_FIAT_AMOUNT_LABEL" />
        </Label>

        <div>
            <Controller
                control={control}
                name="fiatAmount"
                defaultValue={defaultFiatAmount}
                render={({ onChange, value }) => (
                    <StyledSelectBar
                        onChange={onChange}
                        selectedOption={value}
                        options={getFiatAmountOptions(paymentAmounts, fiatCurrency)}
                    />
                )}
            />

            {fiatAmount === CustomPaymentAmountKey && (
                <StyledInput
                    name="customFiatAmount"
                    noTopLabel
                    variant="small"
                    noError
                    autoFocus
                    inputState={customFiatAmountError ? 'error' : 'success'}
                    innerRef={register({
                        validate: (value: string) => {
                            if (!value) {
                                return 'TR_SAVINGS_SETUP_CUSTOM_FIAT_AMOUNT_REQUIRED';
                            }
                            if (Number.isNaN(Number(value))) {
                                return 'TR_SAVINGS_SETUP_CUSTOM_FIAT_AMOUNT_INVALID_FORMAT';
                            }
                            const numberValue = Number(value);
                            if (
                                minimumPaymentAmountLimit &&
                                numberValue < minimumPaymentAmountLimit
                            ) {
                                return (
                                    <Translation
                                        id="TR_SAVINGS_SETUP_CUSTOM_FIAT_AMOUNT_MINIMUM"
                                        values={{
                                            amount: minimumPaymentAmountLimit,
                                        }}
                                    />
                                );
                            }
                            if (
                                maximumPaymentAmountLimit &&
                                numberValue > maximumPaymentAmountLimit
                            ) {
                                return (
                                    <Translation
                                        id="TR_SAVINGS_SETUP_CUSTOM_FIAT_AMOUNT_MAXIMUM"
                                        values={{
                                            amount: maximumPaymentAmountLimit,
                                        }}
                                    />
                                );
                            }
                        },
                    })}
                />
            )}
        </div>

        <CustomAmountInputErrorWrapper>
            <InputError error={customFiatAmountError} />
        </CustomAmountInputErrorWrapper>
    </>
);

export default FiatAmount;
