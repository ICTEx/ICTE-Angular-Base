import { PriceModel } from "./PriceModel";
export declare class RealtimeModel {
    private readonly _id;
    private readonly _price;
    private readonly _bid;
    private readonly _ask;
    private readonly _benchId;
    constructor(id: number);
    _volumeInt: number;
    readonly volumeInt: number;
    _volumeFrac: number;
    readonly volumeFrac: number;
    readonly benchId: PriceModel;
    readonly price: PriceModel;
    readonly bid: PriceModel;
    readonly ask: PriceModel;
    readonly id: number;
    wrap: (toModel: RealtimeModel) => void;
}
