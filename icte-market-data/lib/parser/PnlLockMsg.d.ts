/// <reference types="node" />
import { Parser } from "./Parser";
export declare class PnlLockMsg extends Parser {
    static readonly Fld_DeltaTime: number;
    static readonly Fld_SymbolId: number;
    static readonly Msg_Size: number;
    getDeltaTime: () => number;
    getId: () => number;
    parse: (view: DataView) => void;
    buffer: (deltaTime: number, symbolId: number) => Buffer;
    constructor();
}
