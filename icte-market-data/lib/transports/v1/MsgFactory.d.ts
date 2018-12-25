import { AskMsg } from "../../parser/AskMsg";
import { BidMsg } from "../../parser/BidMsg";
import { QuoteMsg } from "../../parser/QuoteMsg";
import { BuyMsg } from "../../parser/BuyMsg";
import { SellMsg } from "../../parser/SellMsg";
import { PriceMsg } from "../../parser/PriceMsg";
import { Level1Msg } from "../../parser/Level1Msg";
export declare class MsgFactory {
    private static _askMsg;
    private static _bidMsg;
    private static _buyMsg;
    private static _sellMsg;
    private static _quoteMsg;
    private static _priceMsg;
    private static _level1Msg;
    static readonly priceMsg: PriceMsg;
    static readonly sellMsg: SellMsg;
    static readonly buyMsg: BuyMsg;
    static readonly askMsg: AskMsg;
    static readonly bidMsg: BidMsg;
    static readonly level1Msg: Level1Msg;
    static readonly quoteMsg: QuoteMsg;
}
