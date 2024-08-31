import {replaceNonAsciiChars, replaceSingleWhiteSpaces} from "./functions-replacements";
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
    return replaceNonAsciiChars(str);
}
