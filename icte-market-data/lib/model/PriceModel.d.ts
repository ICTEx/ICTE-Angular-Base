export declare class PriceModel {
    private _id;
    _priceInt: number;
    _priceFrac: number;
    _sizeInt: number;
    _sizeFrac: number;
    _venue: number;
    _benchId: number;
    constructor(id: number);
    wrap: (toModel: PriceModel) => void;
}
