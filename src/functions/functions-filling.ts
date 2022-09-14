import { LktObject } from 'lkt-ts-interfaces';

export function lpad(n: string | number, c: number, char: string) {
  n = String(n);
  while (n.length < c) {
    n = char + n;
  }
  return n;
}

export function extractFillData(
  str: string,
  replacements: LktObject,
  leftSeparator: string = ':',
  rightSeparator: string = ''
): any[] {
  return Object.keys(replacements).filter((key) => {
    return str.indexOf(leftSeparator + key + rightSeparator) > -1;
  });
}

export function fill(
  str: string,
  replacements: LktObject,
  leftSeparator: string = ':',
  rightSeparator: string = ''
) {
  const keys = Object.keys(replacements);
  keys.forEach((key) => {
    str = str.replace(leftSeparator + key + rightSeparator, replacements[key]);
  });
  return str;
}
