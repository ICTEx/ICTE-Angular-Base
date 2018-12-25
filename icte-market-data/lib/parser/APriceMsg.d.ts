/// <reference types="node" />
import { Parser } from "./Parser";
export declare abstract class APriceMsg extends Parser {
    static readonly Fld_DeltaTime: number;
    static readonly Fld_SymbolId: number;
    static readonly Fld_PriceInt: number;
    static readonly Fld_PriceFrac: number;
    static readonly Fld_SizeInt: number;
    static readonly Fld_SizeFrac: number;
    static readonly Fld_VolumeInt: number;
    static readonly Fld_VolumeFrac: number;
    static readonly Fld_Venue: number;
    static readonly Fld_BenchmarkId: number;
    static readonly Msg_Size: number;
    getDeltaTime: () => number;
    getId: () => number;
    getPriceInt: () => number;
    getPriceFrac: () => number;
    getSizeInt: () => number;
    getSizeFrac: () => number;
    getVolumeInt: () => number;
    getVolumeFrac: () => number;
    getVenue: () => number;
    getBenchId: () => number;
    parse: (view: DataView) => void;
    buffer: (deltaTime: number, symbolId: number, priceInt: number, priceFrac: number, sizeInt: number, sizeFrac: number, volumeInt: number, volumeFrac: number, venue: number, benchmark: number) => Buffer;
}
