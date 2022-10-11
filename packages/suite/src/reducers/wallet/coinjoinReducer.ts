import produce from 'immer';
import { STORAGE } from '@suite-actions/constants';
import * as COINJOIN from '@wallet-actions/constants/coinjoinConstants';
import { Account, CoinjoinAccount } from '@suite-common/wallet-types';
import { Action } from '@suite-types';
import { PartialRecord } from '@trezor/type-utils';

type Client = {
    status: any[]; // TODO: Rounds from @trezor/coinjoin
};

type CoinjoinState = {
    accounts: CoinjoinAccount[];
    clients: PartialRecord<Account['symbol'], Client>;
};

const initialState: CoinjoinState = {
    accounts: [],
    clients: {},
};

const createAccount = (
    draft: CoinjoinState,
    { account, targetAnonymity }: Extract<Action, { type: typeof COINJOIN.ACCOUNT_CREATE }>,
) => {
    const exists = draft.accounts.find(a => a.key === account.key);
    if (exists) return;
    draft.accounts.push({
        key: account.key,
        targetAnonymity,
        previousSessions: [],
    });
};

const updateTargetAnonymity = (
    draft: CoinjoinState,
    {
        key,
        targetAnonymity,
    }: Extract<Action, { type: typeof COINJOIN.ACCOUNT_UPDATE_TARGET_ANONYMITY }>,
) => {
    const account = draft.accounts.find(a => a.key === key);
    if (!account) return;
    account.targetAnonymity = targetAnonymity;
};

const createSession = (
    draft: CoinjoinState,
    action: Extract<Action, { type: typeof COINJOIN.ACCOUNT_AUTHORIZE_SUCCESS }>,
) => {
    const account = draft.accounts.find(a => a.key === action.account.key);
    if (!account) return;
    account.session = {
        ...action.params,
        timeCreated: Date.now(),
        // phase: 0,
        deadline: Date.now(),
        registeredUtxos: [],
        signedRounds: [],
    };
};

const stopSession = (
    draft: CoinjoinState,
    action: Extract<Action, { type: typeof COINJOIN.ACCOUNT_UNREGISTER }>,
) => {
    const account = draft.accounts.find(a => a.key === action.account.key);
    if (!account) return;
    if (account.session) {
        account.previousSessions.push({
            ...account.session,
            timeEnded: Date.now(),
        });
        delete account.session;
    }
};

const createClient = (
    draft: CoinjoinState,
    action: Extract<Action, { type: typeof COINJOIN.CLIENT_ENABLE_SUCCESS }>,
) => {
    const exists = draft.clients[action.symbol];
    if (exists) return;
    draft.clients[action.symbol] = {
        status: [],
    };
};

export const coinjoinReducer = (
    state: CoinjoinState = initialState,
    action: Action,
): CoinjoinState =>
    produce(state, draft => {
        switch (action.type) {
            case STORAGE.LOAD:
                // Temporary code
                // coinjoin reducer is not stored in DB yet
                // restore accounts with coinjoin accountType
                action.payload.accounts.forEach(account => {
                    if (account.accountType === 'coinjoin') {
                        draft.accounts.push({
                            key: account.key,
                            targetAnonymity: 0,
                            previousSessions: [],
                        });
                    }
                });
                break;
            case COINJOIN.ACCOUNT_CREATE:
                createAccount(draft, action);
                break;
            case COINJOIN.ACCOUNT_UPDATE_TARGET_ANONYMITY:
                updateTargetAnonymity(draft, action);
                break;
            case COINJOIN.ACCOUNT_AUTHORIZE_SUCCESS:
                createSession(draft, action);
                break;
            case COINJOIN.ACCOUNT_UNREGISTER:
                stopSession(draft, action);
                break;

            case COINJOIN.CLIENT_ENABLE_SUCCESS:
                createClient(draft, action);
                break;

            // no default
        }
    });
