/// <reference types="node" />
import * as EventEmiter from 'events';
export declare class BitfinexProxy extends EventEmiter {
    private webSocket;
    private wsState;
    private _keepAliveInterval;
    private _channels;
    constructor();
    private subscribe;
    private chkInfoMsg;
    private processMsg;
}
