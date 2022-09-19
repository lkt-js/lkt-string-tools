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
function C(e, n, a = ":", i = "") {
  return Object.keys(n).forEach((u) => {
    e = e.replace(a + u + i, n[u]);
  }), e;
}
function h(e = 10) {
  let n = "";
  const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = a.length;
  for (let c = 0; c < e; c++)
    n += a.charAt(Math.floor(Math.random() * i));
  return n;
}
function x(e, n) {
  e === null && (e = ""), n = (`${n || ""}`.toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
  const a = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, i = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return e.replace(i, "").replace(a, function(c, u) {
    return n.indexOf(`<${u.toLowerCase()}>`) > -1 ? c : "";
  });
}
function E(e) {
  return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function o(e, n, a) {
  return e.replace(new RegExp(n, "g"), a);
}
function g(e, n) {
  return e.replace(/\s/g, n);
}
function m(e, n = "") {
  if (n === "")
    return e.replace(/^\s+|\s+$/gm, "");
  const a = new RegExp(`^${n}+|${n}+$`, "gm");
  return e.replace(a, "");
}
const r = "^[-!#$%&'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&'*+\\/0-9=?A-Z^_`a-z{|}~]+.[-!#$%&'*+\\./0-9=?A-Z^_`a-z{|}~]+$";
function f(e) {
  return typeof e == "string";
}
function S(e) {
  return new RegExp(r).test(e);
}
function l(e) {
  return String(e);
}
function F(e) {
  return ` ${e}`.slice(1);
}
function A(e) {
  return f(e) || (e = l(e)), !!e;
}
function $(e = "") {
  return f(e) && e !== "" && e.indexOf("data:image/") !== -1;
}
function b(e = "") {
  return e.replace(/-([a-z])/g, function(n) {
    return n[1].toUpperCase();
  });
}
function w(e) {
  return e += "", e.charAt(0).toUpperCase() + e.substring(1);
}
function z(e, n, a, i) {
  let c = String(
    parseFloat(e).toFixed(n).replace(/\d(?=(\d{3})+\.)/g, "$&D")
  );
  return c = String(c.replace(".", a)), c = c.replace(/D/g, i), c;
}
function D(e) {
  return decodeURIComponent(
    l(e).replace(/%(?![\da-f]{2})/gi, "%25").replace(/\+/g, "%20")
  );
}
function O(e) {
  return e = e.toLowerCase(), e = g(e, "-"), e = o(e, "\xF1", "n"), e = o(e, "'", ""), e = o(e, "\xB4", ""), e = o(e, "\\", ""), e = o(e, ".", ""), e = o(e, ",", ""), e = o(e, "/", ""), e = o(e, ":", ""), e = o(e, "\xE1", "a"), e = o(e, "\xE9", "e"), e = o(e, "\xED", "i"), e = o(e, "\xF3", "o"), e = o(e, "\xFA", "u"), e = o(e, "\xE0", "a"), e = o(e, "\xE0", "e"), e = o(e, "\xE0", "i"), e = o(e, "\xE0", "o"), e = o(e, "\xE0", "u"), e = o(e, "\u1E83", "w"), e = o(e, "\u1E81", "w"), e = o(e, "\xFD", "y"), e = o(e, "\u1EF3", "y"), e = o(e, "\u015B", "s"), e = o(e, "\u01F5", "g"), e = o(e, "\u1E31", "k"), e = o(e, "\u013A", "l"), e = o(e, "\u017A", "z"), e = o(e, "\u0107", "c"), e = o(e, "\u01D8", "v"), e = o(e, "\u0144", "n"), e = o(e, "\u1E3F", "m"), e = o(e, "\u01F9", "n"), e = o(e, "\u01DC", "v"), e = o(e, "\xE4", "a"), e = o(e, "\xEB", "e"), e = o(e, "\xEF", "i"), e = o(e, "\xF6", "o"), e = o(e, "\xFC", "u"), e = o(e, "\u1E85", "w"), e = o(e, "\xFF", "y"), e = o(e, "\u1E8D", "x"), e;
}
function y(e) {
  e = e.replace(/\r\n/g, `
`);
  let n = "";
  for (let a = 0; a < e.length; a++) {
    const i = e.charCodeAt(a);
    i < 128 ? n += String.fromCharCode(i) : i > 127 && i < 2048 ? (n += String.fromCharCode(i >> 6 | 192), n += String.fromCharCode(i & 63 | 128)) : (n += String.fromCharCode(i >> 12 | 224), n += String.fromCharCode(i >> 6 & 63 | 128), n += String.fromCharCode(i & 63 | 128));
  }
  return n;
}
function I(e) {
  let n = "", a = 0, i = 0, c = 0, u = 0;
  for (; a < e.length; )
    i = e.charCodeAt(a), i < 128 ? (n += String.fromCharCode(i), a++) : i > 191 && i < 224 ? (c = e.charCodeAt(a + 1), n += String.fromCharCode((i & 31) << 6 | c & 63), a += 2) : (c = e.charCodeAt(a + 1), u = e.charCodeAt(a + 2), n += String.fromCharCode((i & 15) << 12 | (c & 63) << 6 | u & 63), a += 3);
  return n;
}
export {
  F as cloneString,
  D as decodeUrl,
  d as extractFillData,
  C as fill,
  z as formatNumber,
  h as generateRandomString,
  t as getBaseName,
  O as getUrlSlug,
  E as htmlEntities,
  $ as isBase64Image,
  S as isEmail,
  A as isFilled,
  f as isString,
  b as kebabCaseToCamelCase,
  p as lpad,
  o as replaceAll,
  g as replaceSingleWhiteSpaces,
  x as stripTags,
  l as toString,
  m as trim,
  w as ucfirst,
  I as utf8Decode,
  y as utf8Encode
};
