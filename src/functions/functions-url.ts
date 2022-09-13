import {replaceAll, replaceSingleWhiteSpaces} from "./functions-replacements";
import {toString} from "./functions-typing";

export function decodeUrl (str: string)  {
    return decodeURIComponent(
        toString(str)
            .replace(/%(?![\da-f]{2})/gi, '%25')
            .replace(/\+/g, '%20')
    );
}

export function getUrlSlug (str: string)  {
    str = str.toLowerCase();
    str = replaceSingleWhiteSpaces(str, '-');
    str = replaceAll(str, 'ñ', 'n');
    str = replaceAll(str, "'", '');
    str = replaceAll(str, '´', '');
    str = replaceAll(str, '\\', '');
    str = replaceAll(str, '.', '');
    str = replaceAll(str, ',', '');
    str = replaceAll(str, '/', '');
    str = replaceAll(str, ':', '');
    str = replaceAll(str, 'á', 'a');
    str = replaceAll(str, 'é', 'e');
    str = replaceAll(str, 'í', 'i');
    str = replaceAll(str, 'ó', 'o');
    str = replaceAll(str, 'ú', 'u');
    str = replaceAll(str, 'à', 'a');
    str = replaceAll(str, 'à', 'e');
    str = replaceAll(str, 'à', 'i');
    str = replaceAll(str, 'à', 'o');
    str = replaceAll(str, 'à', 'u');
    str = replaceAll(str, 'ẃ', 'w');
    str = replaceAll(str, 'ẁ', 'w');
    str = replaceAll(str, 'ý', 'y');
    str = replaceAll(str, 'ỳ', 'y');
    str = replaceAll(str, 'ś', 's');
    str = replaceAll(str, 'ǵ', 'g');
    str = replaceAll(str, 'ḱ', 'k');
    str = replaceAll(str, 'ĺ', 'l');
    str = replaceAll(str, 'ź', 'z');
    str = replaceAll(str, 'ć', 'c');
    str = replaceAll(str, 'ǘ', 'v');
    str = replaceAll(str, 'ń', 'n');
    str = replaceAll(str, 'ḿ', 'm');
    str = replaceAll(str, 'ǹ', 'n');
    str = replaceAll(str, 'ǜ', 'v');
    str = replaceAll(str, 'ä', 'a');
    str = replaceAll(str, 'ë', 'e');
    str = replaceAll(str, 'ï', 'i');
    str = replaceAll(str, 'ö', 'o');
    str = replaceAll(str, 'ü', 'u');
    str = replaceAll(str, 'ẅ', 'w');
    str = replaceAll(str, 'ÿ', 'y');
    str = replaceAll(str, 'ẍ', 'x');
    return str;
}
