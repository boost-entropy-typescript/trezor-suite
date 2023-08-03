import React from 'react';
import { getIsZeroValuePhishing } from '@suite-common/suite-utils';
import { FiatValue, Translation, MetadataLabeling, AddressLabeling } from 'src/components/suite';
import { ArrayElement } from '@trezor/type-utils';
import {
    getTxOperation,
    getTargetAmount,
    isTestnet,
    formatAmount,
    formatNetworkAmount,
    isNftTokenTransfer,
} from '@suite-common/wallet-utils';
import { WalletAccountTransaction } from 'src/types/wallet';
import { notificationsActions, ToastPayload } from '@suite-common/toast-notifications';
import { useDispatch } from 'src/hooks/suite';
import { TokenTransferAddressLabel } from './TokenTransferAddressLabel';
import { TargetAddressLabel } from './TargetAddressLabel';
import { BaseTargetLayout } from './BaseTargetLayout';
import { copyToClipboard } from '@trezor/dom-utils';
import { AccountMetadata } from 'src/types/suite/metadata';
import { StyledFormattedCryptoAmount, StyledFormattedNftAmount } from './CommonComponents';

interface BaseTransfer {
    singleRowLayout?: boolean;
    useAnimation?: boolean;
    isFirst?: boolean;
    isLast?: boolean;
}

interface TokenTransferProps extends BaseTransfer {
    transfer: ArrayElement<WalletAccountTransaction['tokens']>;
    transaction: WalletAccountTransaction;
}

export const TokenTransfer = ({
    transfer,
    transaction,
    ...baseLayoutProps
}: TokenTransferProps) => {
    const operation = getTxOperation(transfer.type);
    const isNft = isNftTokenTransfer(transfer);
    const isZeroValuePhishing = getIsZeroValuePhishing(transaction);

    return (
        <BaseTargetLayout
            {...baseLayoutProps}
            addressLabel={
                <TokenTransferAddressLabel
                    isZeroValuePhishing={isZeroValuePhishing}
                    transfer={transfer}
                    type={transaction.type}
                />
            }
            amount={
                isNft ? (
                    <StyledFormattedNftAmount transfer={transfer} signValue={operation} />
                ) : (
                    <StyledFormattedCryptoAmount
                        value={formatAmount(transfer.amount, transfer.decimals)}
                        symbol={transfer.symbol}
                        signValue={operation}
                    />
                )
            }
        />
    );
};

interface InternalTransferProps extends BaseTransfer {
    transfer: ArrayElement<WalletAccountTransaction['internalTransfers']>;
    transaction: WalletAccountTransaction;
}

export const InternalTransfer = ({
    transfer,
    transaction,
    ...baseLayoutProps
}: InternalTransferProps) => {
    const amount = transfer.amount && formatNetworkAmount(transfer.amount, transaction.symbol);
    const operation = getTxOperation(transfer.type);

    return (
        <BaseTargetLayout
            {...baseLayoutProps}
            addressLabel={<AddressLabeling address={transfer.to} />}
            amount={
                !baseLayoutProps.singleRowLayout && (
                    <StyledFormattedCryptoAmount
                        value={amount}
                        symbol={transaction.symbol}
                        signValue={operation}
                    />
                )
            }
            fiatAmount={
                !isTestnet(transaction.symbol) && amount ? (
                    <FiatValue
                        amount={amount}
                        symbol={transaction.symbol}
                        source={transaction.rates}
                        useCustomSource
                    />
                ) : undefined
            }
        />
    );
};

interface TargetProps extends BaseTransfer {
    target: ArrayElement<WalletAccountTransaction['targets']>;
    transaction: WalletAccountTransaction;
    accountKey: string;
    accountMetadata?: AccountMetadata;
    isActionDisabled?: boolean;
}

export const Target = ({
    target,
    transaction,
    accountMetadata,
    accountKey,
    isActionDisabled,
    ...baseLayoutProps
}: TargetProps) => {
    const dispatch = useDispatch();

    const targetAmount = getTargetAmount(target, transaction);
    const operation = getTxOperation(transaction.type);
    const targetMetadata = accountMetadata?.outputLabels?.[transaction.txid]?.[target.n];

    const copyAddress = () => {
        let payload: ToastPayload = { type: 'copy-to-clipboard' };
        if (!target?.addresses) {
            // probably should not happen?
            payload = {
                type: 'error',
                error: 'There is nothing to copy',
            };
        } else {
            const result = copyToClipboard(target.addresses.join());
            if (typeof result === 'string') {
                payload = {
                    type: 'error',
                    error: result,
                };
            }
        }
        dispatch(notificationsActions.addToast(payload));
    };

    return (
        <BaseTargetLayout
            {...baseLayoutProps}
            addressLabel={
                <MetadataLabeling
                    isDisabled={isActionDisabled}
                    defaultVisibleValue={
                        <TargetAddressLabel
                            accountMetadata={accountMetadata}
                            target={target}
                            type={transaction.type}
                        />
                    }
                    dropdownOptions={[
                        {
                            callback: copyAddress,
                            label: <Translation id="TR_ADDRESS_MODAL_CLIPBOARD" />,
                            key: 'copy-address',
                        },
                    ]}
                    payload={{
                        type: 'outputLabel',
                        accountKey,
                        txid: transaction.txid,
                        outputIndex: target.n,
                        defaultValue: `${transaction.txid}-${target.n}`,
                        value: targetMetadata,
                    }}
                />
            }
            amount={
                targetAmount && !baseLayoutProps.singleRowLayout ? (
                    <StyledFormattedCryptoAmount
                        value={targetAmount}
                        symbol={transaction.symbol}
                        signValue={operation}
                    />
                ) : undefined
            }
            fiatAmount={
                !isTestnet(transaction.symbol) && targetAmount ? (
                    <FiatValue
                        amount={targetAmount}
                        symbol={transaction.symbol}
                        source={transaction.rates}
                        useCustomSource
                    />
                ) : undefined
            }
        />
    );
};
