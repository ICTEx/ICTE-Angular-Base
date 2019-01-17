export declare class Utilities {
    static PADSIZE: number;
    static padLeft(text: string, padChar: string, size: number): string;
    static logger: {
        debug: (...arg: any[]) => void;
        info: (...arg: any[]) => void;
        warn: (...arg: any[]) => void;
    };
}
