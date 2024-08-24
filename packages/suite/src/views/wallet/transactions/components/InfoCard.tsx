import { ReactNode } from 'react';
import styled from 'styled-components';
import { variables, Card, SkeletonRectangle } from '@trezor/components';
import { HiddenPlaceholder, FormattedCryptoAmount, Sign } from 'src/components/suite';
import { Account } from 'src/types/wallet';
import { BigNumber } from '@trezor/utils/src/bigNumber';

const Wrapper = styled(Card)`
    display: flex;
    flex: 1;
    min-height: 100px;
`;

const InfoCardContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: ${variables.FONT_SIZE.TINY};
    font-weight: ${variables.FONT_WEIGHT.DEMI_BOLD};
    color: ${({ theme }) => theme.legacy.TYPE_LIGHT_GREY};
    text-transform: uppercase;
    margin-bottom: 10px;
`;

const Value = styled.div`
    display: flex;
    font-size: ${variables.FONT_SIZE.NORMAL};
    font-weight: ${variables.FONT_WEIGHT.MEDIUM};
    color: ${({ theme }) => theme.legacy.TYPE_DARK_GREY};
    white-space: nowrap;
    line-height: 1.5;
`;

const SecondaryValueWrapper = styled.div`
    font-size: ${variables.FONT_SIZE.SMALL};
    font-weight: ${variables.FONT_WEIGHT.MEDIUM};
    color: ${({ theme }) => theme.legacy.TYPE_LIGHT_GREY};
    font-variant-numeric: tabular-nums;

    /* margin-left: 1ch; */
    line-height: 1.57;
`;

const StyledHiddenPlaceholder = styled(HiddenPlaceholder)`
    display: flex;
`;

const StyledFormattedValue = styled(FormattedCryptoAmount)`
    display: flex;
    font-size: ${variables.FONT_SIZE.NORMAL};
    font-weight: ${variables.FONT_WEIGHT.MEDIUM};
    color: ${({ theme }) => theme.legacy.TYPE_DARK_GREY};
    white-space: nowrap;
    line-height: 1.5;
`;

type InfoCardProps = {
    title: ReactNode;
    value: ReactNode;
    secondaryValue: ReactNode;
    symbol?: Account['symbol'];
    isNumeric?: boolean;
    isLoading?: boolean;
};

export const InfoCard = (props: InfoCardProps) => {
    let bigValue =
        props.isNumeric && props.value && typeof props.value === 'string'
            ? new BigNumber(props.value)
            : null;
    bigValue = bigValue?.isNaN() ? null : bigValue;

    return (
        <Wrapper>
            <InfoCardContent>
                <Title>{props.title}</Title>
                {props.isLoading && <SkeletonRectangle width="160px" />}

                {!props.isLoading && (
                    <>
                        {bigValue && props.symbol && (
                            <StyledFormattedValue
                                signValue={bigValue}
                                value={bigValue.abs().toFixed()}
                                symbol={props.symbol}
                            />
                        )}

                        {!bigValue && <Value>{props.value}</Value>}

                        {props.isNumeric && props.secondaryValue && (
                            <StyledHiddenPlaceholder>
                                <Value>
                                    <Sign value="positive" placeholderOnly />
                                    <SecondaryValueWrapper>
                                        {props.secondaryValue}
                                    </SecondaryValueWrapper>
                                </Value>
                            </StyledHiddenPlaceholder>
                        )}

                        {!props.isNumeric && props.secondaryValue && (
                            <SecondaryValueWrapper>{props.secondaryValue}</SecondaryValueWrapper>
                        )}
                    </>
                )}
            </InfoCardContent>
        </Wrapper>
    );
};
