import { ReactNode } from 'react';

import { WalletLayout, CoinjoinAccountDiscoveryProgress } from 'src/components/wallet';
import { useSelector } from 'src/hooks/suite';
import { AppState } from 'src/types/suite';
import { selectAccountTransactions, selectIsLoadingTransactions } from '@suite-common/wallet-core';
import { NoTransactions } from './components/NoTransactions';
import { AccountEmpty } from './components/AccountEmpty';
import { TransactionList } from './TransactionList/TransactionList';
import { TransactionSummary } from './components/TransactionSummary';
import { CoinjoinExplanation } from './CoinjoinExplanation/CoinjoinExplanation';
import { CoinjoinSummary } from './CoinjoinSummary/CoinjoinSummary';
import { TradeBox } from './TradeBox/TradeBox';

interface LayoutProps {
    selectedAccount: AppState['wallet']['selectedAccount'];
    children?: ReactNode;
    showEmptyHeaderPlaceholder?: boolean;
}

const Layout = ({ selectedAccount, showEmptyHeaderPlaceholder = false, children }: LayoutProps) => (
    <WalletLayout
        title="TR_NAV_TRANSACTIONS"
        account={selectedAccount}
        showEmptyHeaderPlaceholder={showEmptyHeaderPlaceholder}
    >
        {children}
    </WalletLayout>
);

export const Transactions = () => {
    const transactionsIsLoading = useSelector(selectIsLoadingTransactions);
    const selectedAccount = useSelector(state => state.wallet.selectedAccount);
    const accountTransactions = useSelector(state =>
        selectAccountTransactions(state, selectedAccount.account?.key || ''),
    );

    if (selectedAccount.status !== 'loaded') {
        return <Layout selectedAccount={selectedAccount} />;
    }

    const { account } = selectedAccount;

    if (account.backendType === 'coinjoin') {
        const isLoading = account.status === 'out-of-sync' && !!account.syncing;
        const isEmpty = !accountTransactions.length;

        return (
            <Layout selectedAccount={selectedAccount}>
                {isLoading && <CoinjoinAccountDiscoveryProgress />}

                {!isLoading && (
                    <>
                        <CoinjoinSummary accountKey={account.key} />

                        {isEmpty ? (
                            <CoinjoinExplanation />
                        ) : (
                            <TransactionList
                                account={account}
                                transactions={accountTransactions}
                                symbol={account.symbol}
                                isLoading={transactionsIsLoading}
                            />
                        )}
                    </>
                )}
            </Layout>
        );
    }

    if (accountTransactions.length > 0 || transactionsIsLoading) {
        return (
            <Layout selectedAccount={selectedAccount}>
                {account.networkType !== 'ripple' && <TransactionSummary account={account} />}

                <TradeBox account={account} />

                <TransactionList
                    account={account}
                    transactions={accountTransactions}
                    symbol={account.symbol}
                    isLoading={transactionsIsLoading}
                />
            </Layout>
        );
    }

    if (account.empty) {
        return (
            <Layout selectedAccount={selectedAccount} showEmptyHeaderPlaceholder>
                <AccountEmpty account={selectedAccount.account} />
            </Layout>
        );
    }

    return (
        <Layout selectedAccount={selectedAccount} showEmptyHeaderPlaceholder>
            <NoTransactions account={account} />
        </Layout>
    );
};
