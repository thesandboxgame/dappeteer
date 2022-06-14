export declare type Path = string | {
    download: string;
    extract: string;
};
declare const _default: (version: string, location?: Path, idx?: number) => Promise<string>;
export default _default;
