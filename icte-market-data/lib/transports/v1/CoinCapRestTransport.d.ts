/**
 * By: Marco A. Barragan @ ICTE INC
 */
import { MdTransport } from "../api/MdTransport";
import { MdCallback } from "../api/MdCallback";
export declare class CoinCapRestTransport implements MdTransport {
    private subscriptions;
    private pairs;
    private _connected;
    private cb;
    private coinCapUri;
    private readonly _elapsedTimeMs;
    private _pullMarket;
    private readonly restClient;
    constructor(callback: MdCallback);
    connect(symbols: number[]): void;
    isConnected(): boolean;
    private init;
    private sendData;
    private getData;
}
