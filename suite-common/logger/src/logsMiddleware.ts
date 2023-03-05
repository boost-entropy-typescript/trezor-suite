import { isAnyOf } from '@reduxjs/toolkit';

import { createMiddleware } from '@suite-common/redux-utils';
import {
    accountsActions,
    blockchainActions,
    fiatRatesActions,
    getFiatStaleTickersThunk,
    initFiatRatesThunk,
    onUpdateFiatRateThunk,
    updateCurrentFiatRatesThunk,
    updateLastWeekFiatRatesThunk,
    updateStaleFiatRatesThunk,
    updateTxsFiatRatesThunk,
} from '@suite-common/wallet-core';
import { getAccountIdentifier } from '@suite-common/wallet-utils';

import { addLog } from './logsSlice';

const isAnyOfFiatRatesActions = isAnyOf(
    fiatRatesActions.removeFiatRate,
    fiatRatesActions.updateFiatRate,
    fiatRatesActions.updateLastWeekFiatRates,
    fiatRatesActions.updateTransactionFiatRate,
    getFiatStaleTickersThunk.pending,
    getFiatStaleTickersThunk.fulfilled,
    updateCurrentFiatRatesThunk.pending,
    updateCurrentFiatRatesThunk.fulfilled,
    updateStaleFiatRatesThunk.pending,
    updateStaleFiatRatesThunk.fulfilled,
    onUpdateFiatRateThunk.pending,
    onUpdateFiatRateThunk.fulfilled,
    updateLastWeekFiatRatesThunk.pending,
    updateLastWeekFiatRatesThunk.fulfilled,
    updateTxsFiatRatesThunk.pending,
    updateTxsFiatRatesThunk.fulfilled,
    updateTxsFiatRatesThunk.pending,
    updateTxsFiatRatesThunk.fulfilled,
    initFiatRatesThunk.pending,
    initFiatRatesThunk.fulfilled,
);

export const logsMiddleware = createMiddleware((action, { next, dispatch }) => {
    if (isAnyOf(accountsActions.createAccount, accountsActions.updateAccount)(action)) {
        dispatch(addLog({ type: action.type, payload: { ...action.payload } }));
    }

    if (accountsActions.updateSelectedAccount.match(action)) {
        if (action.payload.account) {
            dispatch(
                addLog({
                    type: action.type,
                    payload: {
                        account: {
                            ...getAccountIdentifier(action.payload.account),
                            index: action.payload.account.index,
                            path: action.payload.account.path,
                        },
                    },
                }),
            );
        } else {
            dispatch(
                addLog({
                    type: action.type,
                    payload: { ...action, type: undefined },
                }),
            );
        }
    }

    if (blockchainActions.setBackend.match(action)) {
        dispatch(addLog({ type: action.type, payload: { ...action.payload, urls: undefined } }));
    }

    if (isAnyOfFiatRatesActions(action)) {
        dispatch(addLog({ type: action.type, payload: { ...action.payload } }));
    }

    return next(action);
});
