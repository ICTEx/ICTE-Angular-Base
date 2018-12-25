import { WalletModel } from "./WalletModel";
import { RealtimeModel } from "./RealtimeModel";
export declare class SymbolModel extends RealtimeModel {
    private readonly _wallet;
    constructor(id: number);
    readonly name: string;
    readonly wallet: WalletModel;
    wrap: (toModel: SymbolModel) => void;
}
