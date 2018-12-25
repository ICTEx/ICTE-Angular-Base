export declare class ErrorModel<T> {
    private _stack;
    constructor(stack?: T[]);
    getMsg(length: number): T[];
    addError(item: T): void;
    private pop;
    clear(): void;
    private readonly count;
}
