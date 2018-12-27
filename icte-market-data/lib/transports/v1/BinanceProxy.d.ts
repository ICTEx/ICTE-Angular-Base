/// <reference types="node" />
import * as EventEmiter from 'events';
export declare class BinanceProxy extends EventEmiter {
    private webSocket;
    private wsState;
    private _keepAliveInterval;
    constructor();
}
