import { Observable } from 'rxjs';
import { MdManager } from './transports/MdManager';
import { ModelManager } from './model/ModelManager';
import { Parser } from './parser/Parser';
import { MdCallback } from "./transports/api/MdCallback";
import { Symbols } from "./model/Symbols";
export declare class ICTE implements MdCallback {
    readonly modelData: ModelManager;
    readonly marketData: MdManager;
    constructor();
    init: () => void;
    on(msg: Parser): void;
    getData(): Observable<Symbols>;
}
