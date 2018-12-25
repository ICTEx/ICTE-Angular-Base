export interface MdTransport {
    connect(symbols: number[]): any;
    isConnected(): any;
}
