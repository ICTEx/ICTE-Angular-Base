export declare class BitfinexConstant {
    static readonly baseEndpoint: string;
    static readonly TRADEEVENT: string;
    static readonly QUOTEEVENT: string;
    static readonly ORDEREVENT: string;
    static readonly TICKEREVENT: string;
    static readonly ERROREVENT: string;
    static readonly CLOSEEVENT: string;
    static readonly OPENEVENT: string;
    static readonly SUBSCRIBEDEVENT: string;
    static readonly DIV: number;
    static readonly PINGTIME: number;
    static readonly MSG_CHANNEL_ID: number;
    static readonly MSG_BID: number;
    static readonly MSG_BID_SIZE: number;
    static readonly MSG_ASK: number;
    static readonly MSG_ASK_SIZE: number;
    static readonly MSG_LAST_PRICE: number;
    static readonly MSG_VOLUME: number;
    static readonly pong = "{event:\"pong\"}";
    static readonly PAIRS: {
        [pair: string]: any;
    };
}
