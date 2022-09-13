import { isString, toString } from './functions-typing';

export function isFilled(str: any): boolean {
  if (!isString(str)) {
    str = toString(str);
  }

  return !!str;
}

export function isBase64String(src = ''): boolean {
  return isString(src) && src !== '' && src.indexOf('data:image/') !== -1;
}
