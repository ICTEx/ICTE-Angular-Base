export declare class WalletModel {
    private _id;
    private _sizeInt;
    private _sizeFrac;
    private _enable;
    constructor(id: number);
    wrap: (toModel: WalletModel) => void;
    getId: () => number;
    getSizeInt: () => number;
    setSizeInt: (value: number) => void;
    getSizeFrac: () => number;
    setSizeFrac: (value: number) => void;
    getEnable: () => boolean;
    setEnable: (value: boolean) => void;
}
