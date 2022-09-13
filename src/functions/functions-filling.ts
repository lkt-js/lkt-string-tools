import {LktObject} from "lkt-ts-interfaces";

export function lpad(n: string | number, c: number, char: string) {
  n = String(n);
  while (n.length < c) {
    n = char + n;
  }
  return n;
}

export function extractFillData(
  str = '',
  replacements: LktObject = {},
  leftSeparator = ':',
  rightSeparator = ''
) {
  const r = [];
  for (const k in replacements) {
    // eslint-disable-next-line no-prototype-builtins
    if (replacements.hasOwnProperty(k)) {
      if (str.indexOf(leftSeparator + k + rightSeparator) > -1) {
        r.push(k);
      }
    }
  }
  return r;
}

export function fill(
  str: string = '',
  replacements: LktObject = {},
  leftSeparator: string = ':',
  rightSeparator: string = ''
) {
  for (const k in replacements) {
    // eslint-disable-next-line no-prototype-builtins
    if (replacements.hasOwnProperty(k)) {
      // @ts-ignore
      str = str.replace(leftSeparator + k + rightSeparator, replacements[k]);
    }
  }
  return str;
}
