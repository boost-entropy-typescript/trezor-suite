import React from 'react';
import styled from 'styled-components';
import { CoinLogo, variables, Icon, H2 } from '@trezor/components';
import { SellFiatTrade } from 'invity-api';
import { useCoinmarketSellOffersContext } from '@wallet-hooks/useCoinmarketSellOffers';
import Quote from './Quote';
import { FormattedCryptoAmount, Translation } from '@suite-components';
import { CoinmarketRefreshTime } from '@wallet-components';
import { InvityAPIReloadQuotesAfterSeconds } from '@wallet-constants/coinmarket/metadata';

interface Props {
    isAlternative?: boolean;
    quotes: SellFiatTrade[];
}

const Wrapper = styled.div``;
const Quotes = styled.div``;

const StyledQuote = styled(Quote)`
    margin-bottom: 20px;
`;

const Header = styled.div`
    margin: 36px 0 24px 0;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${variables.SCREEN_SIZE.SM}) {
        margin: 12px 0 24px;
        flex-direction: column;
        align-items: center;
    }
`;

const Left = styled.div``;
const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: ${variables.SCREEN_SIZE.SM}) {
        margin-top: 6px;
    }
`;

const SummaryRow = styled.div`
    display: flex;
    align-items: center;
`;

const OrigAmount = styled.div`
    color: ${props => props.theme.TYPE_LIGHT_GREY};
    font-size: ${variables.FONT_SIZE.SMALL};
`;

const StyledIcon = styled(Icon)`
    padding: 0 10px;
    margin: 0 20px;
`;

const Text = styled(H2)`
    display: flex;
    padding-top: 3px;
    align-items: center;
    font-weight: ${variables.FONT_WEIGHT.REGULAR};
`;

const Crypto = styled(Text)`
    padding-left: 10px;
    text-transform: uppercase;
`;

const Receive = styled(Text)`
    padding-right: 10px;
    text-transform: uppercase;
`;

const Send = styled(Text)`
    padding-left: 10px;
`;

const StyledCoinLogo = styled(CoinLogo)``;

const NoQuotes = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex: 1;
`;

const List = ({ isAlternative, quotes }: Props) => {
    const { account, quotesRequest, timer } = useCoinmarketSellOffersContext();

    if (!quotesRequest) return null;
    const { fiatStringAmount, fiatCurrency, amountInCrypto } = quotesRequest;

    return (
        <Wrapper>
            <Header>
                <Left>
                    <>
                        <SummaryRow>
                            <StyledCoinLogo size={21} symbol={account.symbol} />
                            {amountInCrypto ? (
                                <Send>
                                    <FormattedCryptoAmount
                                        value={quotes[0].cryptoStringAmount}
                                        symbol={account.symbol}
                                    />
                                </Send>
                            ) : (
                                <Crypto>{quotes[0].cryptoCurrency}</Crypto>
                            )}
                            <StyledIcon icon="ARROW_RIGHT_LONG" />
                            {!amountInCrypto && <Receive>{quotes[0].fiatStringAmount}</Receive>}
                            <Text>{quotes[0].fiatCurrency}</Text>
                        </SummaryRow>
                        {isAlternative && !amountInCrypto && (
                            <OrigAmount>
                                ≈ {fiatStringAmount} {fiatCurrency}
                            </OrigAmount>
                        )}
                    </>
                </Left>
                {!isAlternative && !timer.isStopped && (
                    <Right>
                        <CoinmarketRefreshTime
                            isLoading={timer.isLoading}
                            refetchInterval={InvityAPIReloadQuotesAfterSeconds}
                            seconds={timer.timeSpend.seconds}
                            label={<Translation id="TR_SELL_OFFERS_REFRESH" />}
                        />
                    </Right>
                )}
            </Header>
            <Quotes>
                {quotes?.length === 0 ? (
                    <NoQuotes>
                        <Translation id="TR_SELL_NO_OFFERS" />
                    </NoQuotes>
                ) : (
                    quotes.map(quote => (
                        <StyledQuote
                            amountInCrypto={amountInCrypto}
                            key={`${quote.exchange}-${quote.paymentMethod}-${quote.fiatCurrency}`}
                            quote={quote}
                        />
                    ))
                )}
            </Quotes>
        </Wrapper>
    );
};

export default List;
