import { MdTransport } from "./api/MdTransport";
import { MdCallback } from "./api/MdCallback";
export declare class MdManager implements MdTransport {
    private readonly transports;
    private readonly callback;
    constructor(callback: MdCallback);
    connect: () => void;
    isConnected(): void;
}
