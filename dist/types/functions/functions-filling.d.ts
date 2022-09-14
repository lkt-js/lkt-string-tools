import { LktObject } from 'lkt-ts-interfaces';
export declare function lpad(n: string | number, c: number, char: string): string;
export declare function extractFillData(str: string, replacements: LktObject, leftSeparator?: string, rightSeparator?: string): any[];
export declare function fill(str: string, replacements: LktObject, leftSeparator?: string, rightSeparator?: string): string;
