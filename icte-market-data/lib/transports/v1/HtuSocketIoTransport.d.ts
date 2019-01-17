/**
 By: Marco A. Barragan @ ICTE
 */
import { MdTransport } from "../api/MdTransport";
import { MdCallback } from "../api/MdCallback";
export declare class HtuSocketIoTransport implements MdTransport {
    private subs;
    private callback;
    private socket;
    private parsers;
    private readonly utf8;
    private _connected;
    private readonly uri;
    constructor(callback: MdCallback);
    isConnected: () => boolean;
    connect: (symbols: number[]) => void;
    private setupIpFsClient;
    private setup;
    private subscribe;
}
