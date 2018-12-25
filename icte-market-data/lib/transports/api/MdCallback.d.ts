import { Parser } from "../../parser/Parser";
export interface MdCallback {
    on(msg: Parser): any;
}
