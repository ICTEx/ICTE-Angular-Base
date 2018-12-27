import { MdTransport } from "../api/MdTransport";
import { MdCallback } from "../api/MdCallback";
export declare class HitBtcTransport implements MdTransport {
    private proxy;
    private _connected;
    private cb;
    constructor(callback: MdCallback);
    isConnected(): boolean;
    connect(symbols: number[]): void;
    private init;
    private quoteMsg;
}
