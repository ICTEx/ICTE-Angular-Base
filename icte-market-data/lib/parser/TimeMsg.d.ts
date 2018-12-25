/// <reference types="node" />
import { Parser } from "./Parser";
export declare class TimeMsg extends Parser {
    static readonly Fld_DeltaTime: number;
    static readonly Msg_Size: number;
    constructor();
    getDeltaTime(): number;
    parse(dataView: DataView): void;
    buffer(deltaTime: number): Buffer;
}
