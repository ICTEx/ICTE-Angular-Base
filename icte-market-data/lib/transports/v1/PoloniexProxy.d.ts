/// <reference types="node" />
import * as EventEmiter from 'events';
/***
 * Poloniex Wrapper Class
 */
export declare class PoloniexProxy extends EventEmiter {
    private webSocket;
    private wsState;
    private commandsQueue;
    private _keepAliveInterval;
    constructor();
    private subscribe;
    private send;
    private _marketEvent;
}
