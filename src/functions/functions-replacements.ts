export function replaceAll(
  target: string,
  search: string,
  replacement: string
) {
  return target.replace(new RegExp(search, 'g'), replacement);
}

export function replaceSingleWhiteSpaces(target: string, replacement: string) {
  return target.replace(/\s/g, replacement);
}

export function trim(text: string) {
  return text.replace(/^\s+|\s+$/gm, '');
}
