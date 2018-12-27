/// <reference types="node" />
import * as EventEmiter from 'events';
export declare class HitBtcProxy extends EventEmiter {
    private webSocket;
    private subscription;
    private logger;
    constructor();
    start(): void;
    private onConnected;
    private onMessage;
    private onSnapShot;
}
