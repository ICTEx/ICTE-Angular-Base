import { MdTransport } from "../api/MdTransport";
import { MdCallback } from "../api/MdCallback";
export declare class PoloniexTransport implements MdTransport {
    private poloniex;
    private subscriptions;
    private _connected;
    private cb;
    constructor(callback: MdCallback);
    private static getMsSinceMidnight;
    private static getGmtZeroNow;
    private static getGmtZeroMidnight;
    isConnected(): boolean;
    /***
     * Connect to Poloniex Transport
     * @param symbols
     */
    connect(symbols: number[]): void;
    private subscribe;
    /***
     * Start Poloniex connection and events
     */
    private init;
}
