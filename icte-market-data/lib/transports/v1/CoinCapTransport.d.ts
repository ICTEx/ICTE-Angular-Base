import { MdTransport } from "../api/MdTransport";
import { MdCallback } from "../api/MdCallback";
export declare class CoinCapTransport implements MdTransport {
    private subscriptions;
    private validIdList;
    private _connected;
    private cb;
    private socket;
    private coinCapUri;
    constructor(callback: MdCallback);
    isConnected: () => boolean;
    connect: (symbols: number[]) => void;
    private subscribe;
    private setup;
}
