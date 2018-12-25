import { PriceModel } from "./PriceModel";
export declare class RealtimeModel {
    private readonly _id;
    private readonly _price;
    private readonly _bid;
    private readonly _ask;
    _volumeInt: number;
    _volumeFrac: number;
    constructor(id: number);
    readonly price: PriceModel;
    readonly bid: PriceModel;
    readonly ask: PriceModel;
    readonly id: number;
    readonly volumeInt: number;
    readonly volumeFrac: number;
    wrap: (toModel: RealtimeModel) => void;
}
