function t(e) {
  e = String(e);
  let o = "/";
  e.indexOf("C:\\") === 0 && (o = "\\");
  let i = e.substring(e.lastIndexOf(o) + 1);
  return i.lastIndexOf(".") !== -1 && (i = i.substring(0, i.lastIndexOf("."))), i;
}
function d(e, o, i) {
  for (e = String(e); e.length < o; )
    e = i + e;
  return e;
}
function h(e = "", o = {}, i = ":", a = "") {
  const u = [];
  for (const c in o)
    o.hasOwnProperty(c) && e.indexOf(i + c + a) > -1 && u.push(c);
  return u;
}
function p(e = "", o = {}, i = ":", a = "") {
  for (const u in o)
    o.hasOwnProperty(u) && (e = e.replace(i + u + a, o[u]));
  return e;
}
function C(e = 10) {
  let o = "";
  const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = i.length;
  for (let u = 0; u < e; u++)
    o += i.charAt(Math.floor(Math.random() * a));
  return o;
}
function x(e, o) {
  e === null && (e = ""), o = (`${o || ""}`.toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
  const i = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, a = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return e.replace(a, "").replace(i, function(u, c) {
    return o.indexOf(`<${c.toLowerCase()}>`) > -1 ? u : "";
  });
}
function E(e) {
  return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function n(e, o, i) {
  return e.replace(new RegExp(o, "g"), i);
}
function g(e, o) {
  return e.replace(/\s/g, o);
}
function S(e) {
  return e.replace(/^\s+|\s+$/gm, "");
}
const r = "^[-!#$%&'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&'*+\\/0-9=?A-Z^_`a-z{|}~]+.[-!#$%&'*+\\./0-9=?A-Z^_`a-z{|}~]+$";
function f(e) {
  return typeof e == "string";
}
function m(e) {
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
function w(e = "") {
  return f(e) && e !== "" && e.indexOf("data:image/") !== -1;
}
function z(e = "") {
  return e.replace(/-([a-z])/g, function(o) {
    return o[1].toUpperCase();
  });
}
function D(e) {
  return e += "", e.charAt(0).toUpperCase() + e.substring(1);
}
function O(e, o, i, a) {
  let u = String(
    parseFloat(e).toFixed(o).replace(/\d(?=(\d{3})+\.)/g, "$&D")
  );
  return u = String(u.replace(".", i)), u = u.replace(/D/g, a), u;
}
function b(e) {
  return decodeURIComponent(
    l(e).replace(/%(?![\da-f]{2})/gi, "%25").replace(/\+/g, "%20")
  );
}
function $(e) {
  return e = e.toLowerCase(), e = g(e, "-"), e = n(e, "\xF1", "n"), e = n(e, "'", ""), e = n(e, "\xB4", ""), e = n(e, "\\", ""), e = n(e, ".", ""), e = n(e, ",", ""), e = n(e, "/", ""), e = n(e, ":", ""), e = n(e, "\xE1", "a"), e = n(e, "\xE9", "e"), e = n(e, "\xED", "i"), e = n(e, "\xF3", "o"), e = n(e, "\xFA", "u"), e = n(e, "\xE0", "a"), e = n(e, "\xE0", "e"), e = n(e, "\xE0", "i"), e = n(e, "\xE0", "o"), e = n(e, "\xE0", "u"), e = n(e, "\u1E83", "w"), e = n(e, "\u1E81", "w"), e = n(e, "\xFD", "y"), e = n(e, "\u1EF3", "y"), e = n(e, "\u015B", "s"), e = n(e, "\u01F5", "g"), e = n(e, "\u1E31", "k"), e = n(e, "\u013A", "l"), e = n(e, "\u017A", "z"), e = n(e, "\u0107", "c"), e = n(e, "\u01D8", "v"), e = n(e, "\u0144", "n"), e = n(e, "\u1E3F", "m"), e = n(e, "\u01F9", "n"), e = n(e, "\u01DC", "v"), e = n(e, "\xE4", "a"), e = n(e, "\xEB", "e"), e = n(e, "\xEF", "i"), e = n(e, "\xF6", "o"), e = n(e, "\xFC", "u"), e = n(e, "\u1E85", "w"), e = n(e, "\xFF", "y"), e = n(e, "\u1E8D", "x"), e;
}
function y(e) {
  e = e.replace(/\r\n/g, `
`);
  let o = "";
  for (let i = 0; i < e.length; i++) {
    const a = e.charCodeAt(i);
    a < 128 ? o += String.fromCharCode(a) : a > 127 && a < 2048 ? (o += String.fromCharCode(a >> 6 | 192), o += String.fromCharCode(a & 63 | 128)) : (o += String.fromCharCode(a >> 12 | 224), o += String.fromCharCode(a >> 6 & 63 | 128), o += String.fromCharCode(a & 63 | 128));
  }
  return o;
}
function B(e) {
  let o = "", i = 0, a = 0, u = 0, c = 0;
  for (; i < e.length; )
    a = e.charCodeAt(i), a < 128 ? (o += String.fromCharCode(a), i++) : a > 191 && a < 224 ? (u = e.charCodeAt(i + 1), o += String.fromCharCode((a & 31) << 6 | u & 63), i += 2) : (u = e.charCodeAt(i + 1), c = e.charCodeAt(i + 2), o += String.fromCharCode((a & 15) << 12 | (u & 63) << 6 | c & 63), i += 3);
  return o;
}
export {
  F as cloneString,
  b as decodeUrl,
  h as extractFillData,
  p as fill,
  O as formatNumber,
  C as generateRandomString,
  t as getBaseName,
  $ as getUrlSlug,
  E as htmlEntities,
  w as isBase64String,
  m as isEmail,
  A as isFilled,
  f as isString,
  z as kebabCaseToCamelCase,
  d as lpad,
  n as replaceAll,
  g as replaceSingleWhiteSpaces,
  x as stripTags,
  l as toString,
  S as trim,
  D as ucfirst,
  B as utf8Decode,
  y as utf8Encode
};
