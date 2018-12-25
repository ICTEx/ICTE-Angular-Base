/// <reference types="node" />
export declare class Parser {
    readonly buf: Buffer;
    constructor(size: number);
    msgType(): number;
    msgSubtype(): number;
    parse(view: DataView): void;
    buffer(...args: any[]): Buffer;
    getByte(offset: number): number;
    getShort(offset: number): number;
    getInt(offset: number): number;
    setByte(offset: number, value: number): void;
    setShort(offset: number, value: number): void;
    setInt(offset: number, value: number): void;
}
