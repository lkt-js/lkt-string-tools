export function kebabCaseToCamelCase(str = ''): string {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}

export function ucfirst(t: string): string {
  t += '';
  const e = t.charAt(0).toUpperCase();
  return e + t.substring(1);
}

export function formatNumber(
  value: number,
  decimals: number,
  decimalPoint: string,
  thousandsSeparator: string
) {
  let v = String(
    // @ts-ignore
    parseFloat(value)
      .toFixed(decimals)
      .replace(/\d(?=(\d{3})+\.)/g, '$&D')
  );
  v = String(v.replace('.', decimalPoint));
  v = v.replace(/D/g, thousandsSeparator);
  return v;
}
