export function getBaseName(str: string) {
  str = String(str);
  let split = '/';
  if (str.indexOf('C:\\') === 0) {
    split = '\\';
  }
  let base = str.substring(str.lastIndexOf(split) + 1);
  if (base.lastIndexOf('.') !== -1) {
    base = base.substring(0, base.lastIndexOf('.'));
  }
  return base;
}
