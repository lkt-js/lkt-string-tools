function t(e) {
  e = String(e);
  let n = "/";
  e.indexOf("C:\\") === 0 && (n = "\\");
  let a = e.substring(e.lastIndexOf(n) + 1);
  return a.lastIndexOf(".") !== -1 && (a = a.substring(0, a.lastIndexOf("."))), a;
}
function p(e, n, a) {
  for (e = String(e); e.length < n; )
    e = a + e;
  return e;
}
function d(e, n, a = ":", i = "") {
  return Object.keys(n).filter((c) => e.indexOf(a + c + i) > -1);
}
function h(e, n, a = ":", i = "") {
  return Object.keys(n).forEach((f) => {
    e = e.replace(a + f + i, n[f]);
  }), e;
}
function C(e = 10) {
  let n = "";
  const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = a.length;
  for (let c = 0; c < e; c++)
    n += a.charAt(Math.floor(Math.random() * i));
  return n;
}
function m(e, n) {
  e === null && (e = ""), n = (`${n || ""}`.toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
  const a = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, i = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return e.replace(i, "").replace(a, function(c, f) {
    return n.indexOf(`<${f.toLowerCase()}>`) > -1 ? c : "";
  });
}
function S(e) {
  return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function o(e, n, a) {
  return e.replace(new RegExp(n, "g"), a);
}
function g(e, n) {
  return e.replace(/\s/g, n);
}
function A(e, n = "") {
  if (n === "")
    return e.replace(/^\s+|\s+$/gm, "");
  const a = new RegExp(`^${n}+|${n}+$`, "gm");
  return e.replace(a, "");
}
const r = "^[-!#$%&'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&'*+\\/0-9=?A-Z^_`a-z{|}~]+.[-!#$%&'*+\\./0-9=?A-Z^_`a-z{|}~]+$";
function u(e) {
  return typeof e == "string";
}
function $(e) {
  return new RegExp(r).test(e);
}
function l(e) {
  return String(e);
}
function b(e) {
  return ` ${e}`.slice(1);
}
function x(e) {
  return u(e) || (e = l(e)), !!e;
}
function E(e = "") {
  return u(e) && e !== "" && e.indexOf("data:image/") !== -1;
}
function w(e = "") {
  return e.replace(/-([a-z])/g, function(n) {
    return n[1].toUpperCase();
  });
}
function z(e) {
  return e += "", e.charAt(0).toUpperCase() + e.substring(1);
}
function O(e, n, a, i) {
  let c = String(
    // @ts-ignore
    parseFloat(e).toFixed(n).replace(/\d(?=(\d{3})+\.)/g, "$&D")
  );
  return c = String(c.replace(".", a)), c = c.replace(/D/g, i), c;
}
function y(e) {
  return decodeURIComponent(
    l(e).replace(/%(?![\da-f]{2})/gi, "%25").replace(/\+/g, "%20")
  );
}
function I(e) {
  return e = e.toLowerCase(), e = g(e, "-"), e = o(e, "ñ", "n"), e = o(e, "'", ""), e = o(e, "´", ""), e = o(e, "\\", ""), e = o(e, ".", ""), e = o(e, ",", ""), e = o(e, "/", ""), e = o(e, ":", ""), e = o(e, "á", "a"), e = o(e, "é", "e"), e = o(e, "í", "i"), e = o(e, "ó", "o"), e = o(e, "ú", "u"), e = o(e, "à", "a"), e = o(e, "à", "e"), e = o(e, "à", "i"), e = o(e, "à", "o"), e = o(e, "à", "u"), e = o(e, "ẃ", "w"), e = o(e, "ẁ", "w"), e = o(e, "ý", "y"), e = o(e, "ỳ", "y"), e = o(e, "ś", "s"), e = o(e, "ǵ", "g"), e = o(e, "ḱ", "k"), e = o(e, "ĺ", "l"), e = o(e, "ź", "z"), e = o(e, "ć", "c"), e = o(e, "ǘ", "v"), e = o(e, "ń", "n"), e = o(e, "ḿ", "m"), e = o(e, "ǹ", "n"), e = o(e, "ǜ", "v"), e = o(e, "ä", "a"), e = o(e, "ë", "e"), e = o(e, "ï", "i"), e = o(e, "ö", "o"), e = o(e, "ü", "u"), e = o(e, "ẅ", "w"), e = o(e, "ÿ", "y"), e = o(e, "ẍ", "x"), e;
}
function R(e) {
  e = e.replace(/\r\n/g, `
`);
  let n = "";
  for (let a = 0; a < e.length; a++) {
    const i = e.charCodeAt(a);
    i < 128 ? n += String.fromCharCode(i) : i > 127 && i < 2048 ? (n += String.fromCharCode(i >> 6 | 192), n += String.fromCharCode(i & 63 | 128)) : (n += String.fromCharCode(i >> 12 | 224), n += String.fromCharCode(i >> 6 & 63 | 128), n += String.fromCharCode(i & 63 | 128));
  }
  return n;
}
function k(e) {
  let n = "", a = 0, i = 0, c = 0, f = 0;
  for (; a < e.length; )
    i = e.charCodeAt(a), i < 128 ? (n += String.fromCharCode(i), a++) : i > 191 && i < 224 ? (c = e.charCodeAt(a + 1), n += String.fromCharCode((i & 31) << 6 | c & 63), a += 2) : (c = e.charCodeAt(a + 1), f = e.charCodeAt(a + 2), n += String.fromCharCode((i & 15) << 12 | (c & 63) << 6 | f & 63), a += 3);
  return n;
}
export {
  b as cloneString,
  y as decodeUrl,
  d as extractFillData,
  h as fill,
  O as formatNumber,
  C as generateRandomString,
  t as getBaseName,
  I as getUrlSlug,
  S as htmlEntities,
  E as isBase64Image,
  $ as isEmail,
  x as isFilled,
  u as isString,
  w as kebabCaseToCamelCase,
  p as lpad,
  o as replaceAll,
  g as replaceSingleWhiteSpaces,
  m as stripTags,
  l as toString,
  A as trim,
  z as ucfirst,
  k as utf8Decode,
  R as utf8Encode
};
