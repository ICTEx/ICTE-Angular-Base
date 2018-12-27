/// <reference types="node" />
import * as EventEmiter from 'events';
export declare class BitmexProxy extends EventEmiter {
    private webSocket;
    private wsState;
    private _keepAliveInterval;
    private _channels;
    private initialAutoReconnectInterval;
    private autoReconnectInterval;
    private maxAutoReconnectInterval;
    constructor();
}
