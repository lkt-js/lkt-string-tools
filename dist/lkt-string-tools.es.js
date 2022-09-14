function t(e) {
  e = String(e);
  let a = "/";
  e.indexOf("C:\\") === 0 && (a = "\\");
  let o = e.substring(e.lastIndexOf(a) + 1);
  return o.lastIndexOf(".") !== -1 && (o = o.substring(0, o.lastIndexOf("."))), o;
}
function d(e, a, o) {
  for (e = String(e); e.length < a; )
    e = o + e;
  return e;
}
function C(e, a, o = ":", i = "") {
  return Object.keys(a).filter((u) => e.indexOf(o + u + i) > -1);
}
function p(e, a, o = ":", i = "") {
  return Object.keys(a).forEach((c) => {
    e = e.replace(o + c + i, a[c]);
  }), e;
}
function h(e = 10) {
  let a = "";
  const o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = o.length;
  for (let u = 0; u < e; u++)
    a += o.charAt(Math.floor(Math.random() * i));
  return a;
}
function x(e, a) {
  e === null && (e = ""), a = (`${a || ""}`.toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
  const o = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, i = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return e.replace(i, "").replace(o, function(u, c) {
    return a.indexOf(`<${c.toLowerCase()}>`) > -1 ? u : "";
  });
}
function E(e) {
  return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function n(e, a, o) {
  return e.replace(new RegExp(a, "g"), o);
}
function g(e, a) {
  return e.replace(/\s/g, a);
}
function m(e) {
  return e.replace(/^\s+|\s+$/gm, "");
}
const r = "^[-!#$%&'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&'*+\\/0-9=?A-Z^_`a-z{|}~]+.[-!#$%&'*+\\./0-9=?A-Z^_`a-z{|}~]+$";
function l(e) {
  return typeof e == "string";
}
function S(e) {
  return new RegExp(r).test(e);
}
function f(e) {
  return String(e);
}
function F(e) {
  return ` ${e}`.slice(1);
}
function A(e) {
  return l(e) || (e = f(e)), !!e;
}
function b(e = "") {
  return l(e) && e !== "" && e.indexOf("data:image/") !== -1;
}
function z(e = "") {
  return e.replace(/-([a-z])/g, function(a) {
    return a[1].toUpperCase();
  });
}
function D(e) {
  return e += "", e.charAt(0).toUpperCase() + e.substring(1);
}
function O(e, a, o, i) {
  let u = String(
    parseFloat(e).toFixed(a).replace(/\d(?=(\d{3})+\.)/g, "$&D")
  );
  return u = String(u.replace(".", o)), u = u.replace(/D/g, i), u;
}
function w(e) {
  return decodeURIComponent(
    f(e).replace(/%(?![\da-f]{2})/gi, "%25").replace(/\+/g, "%20")
  );
}
function $(e) {
  return e = e.toLowerCase(), e = g(e, "-"), e = n(e, "\xF1", "n"), e = n(e, "'", ""), e = n(e, "\xB4", ""), e = n(e, "\\", ""), e = n(e, ".", ""), e = n(e, ",", ""), e = n(e, "/", ""), e = n(e, ":", ""), e = n(e, "\xE1", "a"), e = n(e, "\xE9", "e"), e = n(e, "\xED", "i"), e = n(e, "\xF3", "o"), e = n(e, "\xFA", "u"), e = n(e, "\xE0", "a"), e = n(e, "\xE0", "e"), e = n(e, "\xE0", "i"), e = n(e, "\xE0", "o"), e = n(e, "\xE0", "u"), e = n(e, "\u1E83", "w"), e = n(e, "\u1E81", "w"), e = n(e, "\xFD", "y"), e = n(e, "\u1EF3", "y"), e = n(e, "\u015B", "s"), e = n(e, "\u01F5", "g"), e = n(e, "\u1E31", "k"), e = n(e, "\u013A", "l"), e = n(e, "\u017A", "z"), e = n(e, "\u0107", "c"), e = n(e, "\u01D8", "v"), e = n(e, "\u0144", "n"), e = n(e, "\u1E3F", "m"), e = n(e, "\u01F9", "n"), e = n(e, "\u01DC", "v"), e = n(e, "\xE4", "a"), e = n(e, "\xEB", "e"), e = n(e, "\xEF", "i"), e = n(e, "\xF6", "o"), e = n(e, "\xFC", "u"), e = n(e, "\u1E85", "w"), e = n(e, "\xFF", "y"), e = n(e, "\u1E8D", "x"), e;
}
function y(e) {
  e = e.replace(/\r\n/g, `
`);
  let a = "";
  for (let o = 0; o < e.length; o++) {
    const i = e.charCodeAt(o);
    i < 128 ? a += String.fromCharCode(i) : i > 127 && i < 2048 ? (a += String.fromCharCode(i >> 6 | 192), a += String.fromCharCode(i & 63 | 128)) : (a += String.fromCharCode(i >> 12 | 224), a += String.fromCharCode(i >> 6 & 63 | 128), a += String.fromCharCode(i & 63 | 128));
  }
  return a;
}
function I(e) {
  let a = "", o = 0, i = 0, u = 0, c = 0;
  for (; o < e.length; )
    i = e.charCodeAt(o), i < 128 ? (a += String.fromCharCode(i), o++) : i > 191 && i < 224 ? (u = e.charCodeAt(o + 1), a += String.fromCharCode((i & 31) << 6 | u & 63), o += 2) : (u = e.charCodeAt(o + 1), c = e.charCodeAt(o + 2), a += String.fromCharCode((i & 15) << 12 | (u & 63) << 6 | c & 63), o += 3);
  return a;
}
export {
  F as cloneString,
  w as decodeUrl,
  C as extractFillData,
  p as fill,
  O as formatNumber,
  h as generateRandomString,
  t as getBaseName,
  $ as getUrlSlug,
  E as htmlEntities,
  b as isBase64Image,
  S as isEmail,
  A as isFilled,
  l as isString,
  z as kebabCaseToCamelCase,
  d as lpad,
  n as replaceAll,
  g as replaceSingleWhiteSpaces,
  x as stripTags,
  f as toString,
  m as trim,
  D as ucfirst,
  I as utf8Decode,
  y as utf8Encode
};
