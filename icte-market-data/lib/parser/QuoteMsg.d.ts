/// <reference types="node" />
import { Parser } from "./Parser";
export declare class QuoteMsg extends Parser {
    static readonly Fld_DeltaTime: number;
    static readonly Fld_SymbolId: number;
    static readonly Fld_BidInt: number;
    static readonly Fld_BidFrac: number;
    static readonly Fld_BidSizeInt: number;
    static readonly Fld_BidSizeFrac: number;
    static readonly Fld_AskInt: number;
    static readonly Fld_AskFrac: number;
    static readonly Fld_AskSizeInt: number;
    static readonly Fld_AskSizeFrac: number;
    static readonly Fld_Venue: number;
    static readonly Fld_BenchmarkId: number;
    static readonly Msg_Size: number;
    getDeltaTime: () => number;
    getId: () => number;
    getBidInt: () => number;
    getBidFrac: () => number;
    getBidSizeInt: () => number;
    getBidSizeFrac: () => number;
    getAskInt: () => number;
    getAskFrac: () => number;
    getAskSizeInt: () => number;
    getAskSizeFrac: () => number;
    getVenue: () => number;
    getBenchId: () => number;
    parse: (view: DataView) => void;
    buffer: (deltaTime: number, symbolId: number, bidInt: number, bidFrac: number, bidSizeInt: number, bidSizeFrac: number, askInt: number, askFrac: number, askSizeInt: number, askSizeFrac: number, venue: number, benchId: number) => Buffer;
    constructor();
    toString: () => string;
}
