/***
 * Constants for Poloniex Transport
 */
export declare class PoloniexConstants {
    /***
     * Header for the Poloniex connection
     */
    static readonly header: {
        headers: {
            "User-Agent": string;
            "Cookie": string;
        };
    };
    /***
     * Account key
     */
    static readonly key: string;
    /***
     * Account signature
     */
    static readonly sign: string;
    /***
     * Poloniex server url
     */
    static readonly poloniexUrl: string;
    /***
     * Valid Id by Pairs
     */
    static readonly validPairs: {
        'BTC_BCN': number;
        'BTC_BTS': number;
        'BTC_BURST': number;
        'BTC_CLAM': number;
        'BTC_DGB': number;
        'BTC_DOGE': number;
        'BTC_DASH': number;
        'BTC_GAME': number;
        'BTC_HUC': number;
        'BTC_LTC': number;
        'BTC_MAID': number;
        'BTC_OMNI': number;
        'BTC_NAV': number;
        'BTC_NMC': number;
        'BTC_NXT': number;
        'BTC_PPC': number;
        'BTC_STR': number;
        'BTC_SYS': number;
        'BTC_VIA': number;
        'BTC_VTC': number;
        'BTC_XCP': number;
        'BTC_XMR': number;
        'BTC_XPM': number;
        'BTC_XRP': number;
        'BTC_XEM': number;
        'BTC_ETH': number;
        'BTC_SC': number;
        'BTC_FCT': number;
        'BTC_DCR': number;
        'BTC_LSK': number;
        'BTC_LBC': number;
        'BTC_STEEM': number;
        'BTC_SBD': number;
        'BTC_ETC': number;
        'BTC_REP': number;
        'BTC_ARDR': number;
        'BTC_ZEC': number;
        'BTC_STRAT': number;
        'BTC_PASC': number;
        'BTC_GNT': number;
        'BTC_BCH': number;
        'BTC_ZRX': number;
        'BTC_CVC': number;
        'BTC_OMG': number;
        'BTC_GAS': number;
        'BTC_STORJ': number;
        'BTC_EOS': number;
        'BTC_SNT': number;
        'BTC_KNC': number;
        'BTC_BAT': number;
        'BTC_LOOM': number;
        'BTC_QTUM': number;
        'BTC_BNT': number;
        'BTC_MANA': number;
        'XMR_BCN': number;
        'XMR_DASH': number;
        'XMR_LTC': number;
        'XMR_MAID': number;
        'XMR_NXT': number;
        'XMR_ZEC': number;
        'ETH_LSK': number;
        'ETH_STEEM': number;
        'ETH_ETC': number;
        'ETH_REP': number;
        'ETH_ZEC': number;
        'ETH_GNT': number;
        'ETH_BCH': number;
        'ETH_ZRX': number;
        'ETH_CVC': number;
        'ETH_OMG': number;
        'ETH_GAS': number;
        'ETH_EOS': number;
        'ETH_SNT': number;
        'ETH_KNC': number;
        'ETH_BAT': number;
        'ETH_LOOM': number;
        'ETH_QTUM': number;
        'ETH_BNT': number;
        'ETH_MANA': number;
        'USDC_BTC': number;
        'USDC_USDT': number;
        'USDC_ETH': number;
        'USDT_BTC': number;
        'USDT_DOGE': number;
        'USDT_DASH': number;
        'USDT_LTC': number;
        'USDT_NXT': number;
        'USDT_STR': number;
        'USDT_XMR': number;
        'USDT_XRP': number;
        'USDT_ETH': number;
        'USDT_SC': number;
        'USDT_LSK': number;
        'USDT_ETC': number;
        'USDT_REP': number;
        'USDT_ZEC': number;
        'USDT_GNT': number;
        'USDT_BCH': number;
        'USDT_ZRX': number;
        'USDT_EOS': number;
        'USDT_SNT': number;
        'USDT_KNC': number;
        'USDT_BAT': number;
        'USDT_LOOM': number;
        'USDT_QTUM': number;
        'USDT_BNT': number;
        'USDT_MANA': number;
    };
    /***
     * Valid pairs by Id
     */
    static readonly validPairId: {
        7: string;
        14: string;
        15: string;
        20: string;
        25: string;
        27: string;
        24: string;
        38: string;
        43: string;
        50: string;
        51: string;
        58: string;
        61: string;
        64: string;
        69: string;
        75: string;
        89: string;
        92: string;
        97: string;
        100: string;
        108: string;
        114: string;
        116: string;
        117: string;
        112: string;
        148: string;
        150: string;
        155: string;
        162: string;
        163: string;
        167: string;
        168: string;
        170: string;
        171: string;
        174: string;
        177: string;
        178: string;
        182: string;
        184: string;
        185: string;
        189: string;
        192: string;
        194: string;
        196: string;
        198: string;
        200: string;
        201: string;
        204: string;
        207: string;
        210: string;
        213: string;
        221: string;
        232: string;
        229: string;
        236: string;
        238: string;
        121: string;
        216: string;
        122: string;
        123: string;
        124: string;
        125: string;
        126: string;
        127: string;
        149: string;
        219: string;
        218: string;
        173: string;
        175: string;
        180: string;
        217: string;
        191: string;
        220: string;
        203: string;
        206: string;
        209: string;
        212: string;
        215: string;
        223: string;
        234: string;
        231: string;
        129: string;
        132: string;
        137: string;
        138: string;
        140: string;
        181: string;
        166: string;
        169: string;
        172: string;
        176: string;
        179: string;
        186: string;
        190: string;
        193: string;
        195: string;
        197: string;
        199: string;
        202: string;
        205: string;
        208: string;
        211: string;
        214: string;
        222: string;
        233: string;
        230: string;
        224: string;
        226: string;
        225: string;
        235: string;
        237: string;
        239: string;
    };
    static readonly BUY: number;
    static readonly SELL: number;
    static readonly BID: number;
    static readonly ASK: number;
    static readonly MINPAIR: number;
    static readonly MAXPAIR: number;
    static readonly TICKER: number;
    static readonly HEARTBEAT: number;
    static readonly PINGTIME: number;
    static readonly TRADEEVENT: string;
    static readonly QUOTEEVENT: string;
    static readonly ORDEREVENT: string;
    static readonly TICKEREVENT: string;
    static readonly ERROREVENT: string;
    static readonly CLOSEEVENT: string;
    static readonly OPENEVENT: string;
    static readonly AMOUNT_ZERO: string;
    static readonly SUBSCRIBE: string;
    static readonly DIV: number;
}
