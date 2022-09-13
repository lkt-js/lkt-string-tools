import { EMAIL_REGEX } from '../constants';

export function isString(value: any): boolean {
  return typeof value === 'string';
}

export function isEmail(str: string): boolean {
  return new RegExp(EMAIL_REGEX).test(str);
}

export function toString(datum: any): string {
  return String(datum);
}

export function cloneString(str: string) {
  return ` ${str}`.slice(1);
}
