/// <reference types="node" />
import { Parser } from "./Parser";
export declare class RateMsg extends Parser {
    static readonly Fld_DeltaTime: number;
    static readonly Fld_FrontSymbolId: number;
    static readonly Fld_BackSymbolId: number;
    static readonly Fld_RateInt: number;
    static readonly Fld_RateFrac: number;
    static readonly Msg_Size: number;
    constructor();
    getDeltaTime(): number;
    getFrontSymbolId(): number;
    getBackBackSymbolId(): number;
    getRateInt(): number;
    getRateFrac(): number;
    parse(dataView: DataView): void;
    buffer(deltaTime: number, frontSymbolId: number, backSymbolId: number, rateInt: number, rateFrac: number): Buffer;
}
