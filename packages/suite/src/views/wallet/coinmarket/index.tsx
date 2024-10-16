import styled from 'styled-components';
import { variables, Spinner } from '@trezor/components';
import {
    Elevation,
    mapElevationToBackground,
    nativeTypography,
    nextElevation,
    spacings,
    spacingsPx,
    typography,
} from '@trezor/theme';
import { SCREEN_QUERY } from '@trezor/components/src/config/variables';
import { Margin } from 'recharts/types/util/types';
import { CoinmarketCoinLogo } from 'src/views/wallet/coinmarket/common/CoinmarketCoinLogo';

interface ResponsiveSize {
    $responsiveSize: keyof typeof variables.SCREEN_SIZE;
}

export const Wrapper = styled.div<ResponsiveSize>`
    display: flex;
    flex: 1;

    @media screen and (min-width: ${props => variables.SCREEN_SIZE[props.$responsiveSize]}) {
        flex-flow: wrap;
    }

    @media screen and (max-width: ${props => variables.SCREEN_SIZE[props.$responsiveSize]}) {
        flex-direction: column;
    }
`;

export const CoinmarketFormInput = styled.div<{ $isWithoutPadding?: boolean }>`
    position: relative;
    padding-bottom: ${({ $isWithoutPadding }) =>
        $isWithoutPadding ? spacings.zero : spacingsPx.md};

    input {
        color: ${({ theme }) => theme.textSubdued};
    }
`;

export const CoinmarketFormInputInner = styled.div`
    position: relative;
`;

export const CoinmarketFormInputLabelWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: ${spacingsPx.xs};
`;

export const CoinmarketFormInputLabelText = styled.label`
    ${typography.body}
`;

export const CoinmarketFormOption = styled.div`
    display: flex;
    align-items: center;
`;

export const CoinmarketFormOptionGroupLabel = styled.div`
    color: ${({ theme }) => theme.textSubdued};
`;

export const CoinmarketFormOptionLogo = styled(CoinmarketCoinLogo)`
    display: flex;
    align-items: center;
    margin-right: ${spacingsPx.xs};
`;

export const CoinmarketFormOptionLabel = styled.div<{ $isDark?: boolean }>`
    color: ${({ theme, $isDark }) => ($isDark ? theme.textDefault : theme.textSubdued)};
`;

export const CoinmarketFormOptionLabelLong = styled.div`
    padding-left: ${spacingsPx.sm};
    padding-top: ${spacingsPx.xxxs};
    ${typography.label}
    color: ${({ theme }) => theme.textSubdued};
`;

export const CoinmarketFormOptionNetwork = styled.div<{ $elevation: Elevation }>`
    padding: 2px 6px;
    margin-left: 10px;
    font-size: ${nativeTypography.label.fontSize}px;
    background: ${({ theme, $elevation }) =>
        mapElevationToBackground({ theme, $elevation: nextElevation[$elevation] })};
    border-radius: 4px;
`;

export const CoinmarketAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: ${spacingsPx.md};

    ${SCREEN_QUERY.MOBILE} {
        margin-top: ${spacingsPx.xs};
    }
`;

export const CoinmarketAmountWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${spacingsPx.xs};
    ${typography.titleMedium}
    line-height: unset;
    padding: ${spacingsPx.xxxs} ${spacingsPx.zero};

    ${SCREEN_QUERY.BELOW_DESKTOP} {
        font-size: 28px;
    }

    ${SCREEN_QUERY.BELOW_LAPTOP} {
        font-size: ${nativeTypography.titleMedium.fontSize}px;
    }

    ${SCREEN_QUERY.MOBILE} {
        font-size: ${nativeTypography.titleSmall.fontSize}px;
        margin-top: ${spacingsPx.xs};
    }
`;

export const CoinmarketAmountWrapperText = styled.div`
    padding-right: ${spacingsPx.xs};
    font-variant-numeric: tabular-nums;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1;
`;

export const CoinmarketInfoLeftColumn = styled.div`
    display: flex;
    flex: 1;
    ${typography.hint}
    color: ${({ theme }) => theme.textSubdued};
`;

export const CoinmarketInfoRightColumn = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    ${typography.body}
    color: ${({ theme }) => theme.textDefault};
`;

export const CoinmarketInfoAmount = styled.div`
    padding-left: ${spacingsPx.xs};
`;

export const CoinmarketBorder = styled.div<{ $margin?: Margin }>`
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.borderElevation1};
    ${({ $margin }) =>
        `margin: ${$margin?.top ?? spacings.zero}px ${$margin?.right ?? spacings.zero}px ${$margin?.bottom ?? spacings.zero}px ${$margin?.left ?? spacings.zero}px`};
`;

export const CoinmarketFormOfferSpinnerWrapper = styled.div`
    width: 100%;
    padding: ${spacingsPx.sm} 0;
`;

export const CoinmarketFormOfferSpinnerText = styled.div`
    ${typography.hint}
    color: ${({ theme }) => theme.textSubdued};
    text-align: center;
`;

export const CoinmarketSpinnerWrapper = styled(Spinner)`
    flex: none;
    margin: 0 ${spacingsPx.xs};
`;

export const TooltipWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${spacingsPx.xxs};
    padding-bottom: ${spacingsPx.xxxs};

    &:hover {
        div {
            color: ${({ theme }) => theme.textDefault};

            &::after {
                background: ${({ theme }) => theme.textDefault};
            }
        }

        path[fill] {
            fill: ${({ theme }) => theme.textDefault};
        }

        path[stroke] {
            stroke: ${({ theme }) => theme.textDefault};
        }
    }
`;

export const TooltipIcon = styled.div`
    margin-top: 1px;
    margin-right: ${spacingsPx.xs};
`;

export const TooltipText = styled.div<{ $isYellow?: boolean }>`
    position: relative;
    ${typography.hint}
    color: ${({ $isYellow, theme }) => ($isYellow ? theme.textAlertYellow : theme.textDefault)};
    transition: color 0.15s;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: ${({ $isYellow, theme }) =>
            $isYellow ? theme.textAlertYellow : theme.textDefault};
        transition: background 0.15s;
    }
`;

export const CoinmarketTestWrapper = styled.div``;

export const CoinmarketFooterLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    padding-top: 1px;
`;
