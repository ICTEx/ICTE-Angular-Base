/// <reference types="node" />
import { Parser } from "./Parser";
export declare class Level1Msg extends Parser {
    static readonly Fld_DeltaTime: number;
    static readonly Fld_SymbolId: number;
    static readonly Fld_PriceInt: number;
    static readonly Fld_PriceFrac: number;
    static readonly Fld_BidInt: number;
    static readonly Fld_BidFrac: number;
    static readonly Fld_AskInt: number;
    static readonly Fld_AskFrac: number;
    static readonly Fld_Venue: number;
    static readonly Fld_Benchmark: number;
    static readonly Msg_Size: number;
    getDeltaTime: () => number;
    getId: () => number;
    getPriceInt: () => number;
    getPriceFrac: () => number;
    getBidInt: () => number;
    getBidFrac: () => number;
    getAskInt: () => number;
    getAskFrac: () => number;
    getVenue: () => number;
    getBenchmark: () => number;
    parse: (view: DataView) => void;
    buffer: (deltaTime: number, symbolId: number, priceInt: number, priceFrac: number, bidInt: number, bidFrac: number, askInt: number, askFrac: number, venue: number, benchmark: number) => Buffer;
    constructor();
}
