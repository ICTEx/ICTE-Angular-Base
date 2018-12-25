/// <reference types="node" />
import { Parser } from "./Parser";
export declare class PnlMsg extends Parser {
    static readonly Fld_DeltaTime: number;
    static readonly Fld_SymbolId: number;
    static readonly Fld_SizeInt: number;
    static readonly Fld_SizeFrac: number;
    static readonly Msg_Size: number;
    getDeltaTime: () => number;
    getId: () => number;
    getSizeInt: () => number;
    getSizeFrac: () => number;
    parse: (view: DataView) => void;
    buffer: (deltaTime: number, symbolId: number, sizeInt: number, sizeFrac: number) => Buffer;
    constructor();
}
