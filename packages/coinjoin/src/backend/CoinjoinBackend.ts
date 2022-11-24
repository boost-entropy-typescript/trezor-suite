import { EventEmitter } from 'events';

import { CoinjoinBackendClient } from './CoinjoinBackendClient';
import { CoinjoinFilterController } from './CoinjoinFilterController';
import { CoinjoinMempoolController } from './CoinjoinMempoolController';
import { DISCOVERY_LOOKOUT } from '../constants';
import { scanAccount } from './scanAccount';
import { scanAddress } from './scanAddress';
import { getAccountInfo } from './getAccountInfo';
import { getNetwork } from '../utils/settingsUtils';
import type { CoinjoinBackendSettings } from '../types';
import type {
    ScanAddressParams,
    ScanAccountParams,
    ScanAddressCheckpoint,
    ScanAccountCheckpoint,
    ScanAccountProgress,
    Transaction,
    AccountCache,
} from '../types/backend';

interface Events {
    progress: ScanAccountProgress;
}

type EventType<K extends keyof Events, D extends string> = `${K}/${D}`;

export declare interface CoinjoinBackend {
    on<K extends keyof Events, D extends string>(
        type: EventType<K, D>,
        listener: (event: Events[K]) => void,
    ): this;
    off<K extends keyof Events, D extends string>(
        type: EventType<K, D>,
        listener: (event: Events[K]) => void,
    ): this;
    emit<K extends keyof Events, D extends string>(
        type: EventType<K, D>,
        ...args: Events[K][]
    ): boolean;
    removeAllListeners<K extends keyof Events, D extends string>(type?: EventType<K, D>): this;
}

export class CoinjoinBackend extends EventEmitter {
    readonly settings: CoinjoinBackendSettings;

    private readonly network;
    private readonly client;
    private readonly mempool;

    private abortController: AbortController | undefined;

    constructor(settings: CoinjoinBackendSettings) {
        super();
        this.settings = Object.freeze(settings);
        this.network = getNetwork(settings.network);
        this.client = new CoinjoinBackendClient(settings);
        this.mempool = new CoinjoinMempoolController(this.client);
    }

    scanAccount({ descriptor, checkpoints, cache }: ScanAccountParams) {
        this.abortController = new AbortController();
        const filters = new CoinjoinFilterController(this.client, this.settings);

        return scanAccount(
            { descriptor, checkpoints: this.getCheckpoints(checkpoints), cache },
            {
                client: this.client,
                network: this.network,
                abortSignal: this.abortController.signal,
                filters,
                mempool: this.mempool,
                onProgress: progress => this.emit(`progress/${descriptor}`, progress),
            },
        );
    }

    scanAddress({ descriptor, checkpoints }: ScanAddressParams) {
        this.abortController = new AbortController();
        const filters = new CoinjoinFilterController(this.client, this.settings);

        return scanAddress(
            { descriptor, checkpoints: this.getCheckpoints(checkpoints) },
            {
                client: this.client,
                network: this.network,
                abortSignal: this.abortController.signal,
                filters,
                mempool: this.mempool,
                onProgress: progress =>
                    this.emit(`progress/${descriptor}`, {
                        ...progress,
                        // TODO resolve this correctly
                        checkpoint: { ...progress.checkpoint, receiveCount: -1, changeCount: -1 },
                    }),
            },
        );
    }

    getAccountInfo(
        descriptor: string,
        transactions: Transaction[],
        checkpoint?: ScanAccountCheckpoint,
        cache?: AccountCache,
    ) {
        const accountInfo = getAccountInfo({
            descriptor,
            transactions,
            checkpoint,
            cache,
            network: this.network,
        });
        return Promise.resolve(accountInfo);
    }

    cancel() {
        this.abortController?.abort();
    }

    private getCheckpoints(checkpoints?: ScanAccountCheckpoint[]): ScanAccountCheckpoint[];
    private getCheckpoints(checkpoints?: ScanAddressCheckpoint[]): ScanAddressCheckpoint[];
    private getCheckpoints(checkpoints: any[] = []) {
        if (checkpoints.find(({ blockHeight }) => blockHeight <= this.settings.baseBlockHeight)) {
            throw new Error('Cannot get checkpoint which precedes base block.');
        }

        return checkpoints
            .slice()
            .sort((a, b) => b.blockHeight - a.blockHeight)
            .concat({
                blockHash: this.settings.baseBlockHash,
                blockHeight: this.settings.baseBlockHeight,
                receiveCount: DISCOVERY_LOOKOUT,
                changeCount: DISCOVERY_LOOKOUT,
            });
    }
}
