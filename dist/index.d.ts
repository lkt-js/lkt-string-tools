import { LktObject } from 'lkt-ts-interfaces';

declare function getBaseName(str: string): string;

declare function lpad(n: string | number, c: number, char: string): string;
declare function extractFillData(str: string, replacements: LktObject, leftSeparator?: string, rightSeparator?: string): any[];
declare function fill(str: string, replacements: LktObject, leftSeparator?: string, rightSeparator?: string): string;

declare function generateRandomString(length?: number): string;

declare function stripTags(input: string, allowed?: string): string;
declare function htmlEntities(str: string): string;

declare function replaceAll(target: string, search: string, replacement: string): string;
declare function replaceSingleWhiteSpaces(target: string, replacement: string): string;
declare function trim(text: string, value?: string): string;
declare function replaceNonAsciiChars(str: string): string;

declare function isFilled(str: any): boolean;
declare function isBase64Image(src?: string): boolean;

declare function kebabCaseToCamelCase(str?: string): string;
declare function ucfirst(t: string): string;
declare function formatNumber(value: number, decimals: number, decimalPoint: string, thousandsSeparator: string, removeDecimalsIfZero?: boolean): string;

declare function isString(value: any): boolean;
declare function isEmail(str: string): boolean;
declare function toString(datum: any): string;
declare function cloneString(str: string): string;

declare function decodeUrl(str: string): string;
declare function getUrlSlug(str: string): string;

declare function utf8Encode(string: string): string;
declare function utf8Decode(text: string): string;

export { cloneString, decodeUrl, extractFillData, fill, formatNumber, generateRandomString, getBaseName, getUrlSlug, htmlEntities, isBase64Image, isEmail, isFilled, isString, kebabCaseToCamelCase, lpad, replaceAll, replaceNonAsciiChars, replaceSingleWhiteSpaces, stripTags, toString, trim, ucfirst, utf8Decode, utf8Encode };
