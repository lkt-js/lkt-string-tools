(function(u,f){typeof exports=="object"&&typeof module<"u"?f(exports):typeof define=="function"&&define.amd?define(["exports"],f):(u=typeof globalThis<"u"?globalThis:u||self,f(u.LktStringTools={}))})(this,function(u){"use strict";function f(e){e=String(e);let i="/";e.indexOf("C:\\")===0&&(i="\\");let a=e.substring(e.lastIndexOf(i)+1);return a.lastIndexOf(".")!==-1&&(a=a.substring(0,a.lastIndexOf("."))),a}function r(e,i,a){for(e=String(e);e.length<i;)e=a+e;return e}function h(e="",i={},a=":",o=""){const c=[];for(const l in i)i.hasOwnProperty(l)&&e.indexOf(a+l+o)>-1&&c.push(l);return c}function C(e="",i={},a=":",o=""){for(const c in i)i.hasOwnProperty(c)&&(e=e.replace(a+c+o,i[c]));return e}function S(e=10){let i="";const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=a.length;for(let c=0;c<e;c++)i+=a.charAt(Math.floor(Math.random()*o));return i}function m(e,i){e===null&&(e=""),i=(`${i||""}`.toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");const a=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,o=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return e.replace(o,"").replace(a,function(c,l){return i.indexOf(`<${l.toLowerCase()}>`)>-1?c:""})}function E(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function n(e,i,a){return e.replace(new RegExp(i,"g"),a)}function t(e,i){return e.replace(/\s/g,i)}function p(e){return e.replace(/^\s+|\s+$/gm,"")}const F="^[-!#$%&'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&'*+\\/0-9=?A-Z^_`a-z{|}~]+.[-!#$%&'*+\\./0-9=?A-Z^_`a-z{|}~]+$";function g(e){return typeof e=="string"}function A(e){return new RegExp(F).test(e)}function d(e){return String(e)}function b(e){return` ${e}`.slice(1)}function D(e){return g(e)||(e=d(e)),!!e}function w(e=""){return g(e)&&e!==""&&e.indexOf("data:image/")!==-1}function O(e=""){return e.replace(/-([a-z])/g,function(i){return i[1].toUpperCase()})}function y(e){return e+="",e.charAt(0).toUpperCase()+e.substring(1)}function z(e,i,a,o){let c=String(parseFloat(e).toFixed(i).replace(/\d(?=(\d{3})+\.)/g,"$&D"));return c=String(c.replace(".",a)),c=c.replace(/D/g,o),c}function T(e){return decodeURIComponent(d(e).replace(/%(?![\da-f]{2})/gi,"%25").replace(/\+/g,"%20"))}function x(e){return e=e.toLowerCase(),e=t(e,"-"),e=n(e,"\xF1","n"),e=n(e,"'",""),e=n(e,"\xB4",""),e=n(e,"\\",""),e=n(e,".",""),e=n(e,",",""),e=n(e,"/",""),e=n(e,":",""),e=n(e,"\xE1","a"),e=n(e,"\xE9","e"),e=n(e,"\xED","i"),e=n(e,"\xF3","o"),e=n(e,"\xFA","u"),e=n(e,"\xE0","a"),e=n(e,"\xE0","e"),e=n(e,"\xE0","i"),e=n(e,"\xE0","o"),e=n(e,"\xE0","u"),e=n(e,"\u1E83","w"),e=n(e,"\u1E81","w"),e=n(e,"\xFD","y"),e=n(e,"\u1EF3","y"),e=n(e,"\u015B","s"),e=n(e,"\u01F5","g"),e=n(e,"\u1E31","k"),e=n(e,"\u013A","l"),e=n(e,"\u017A","z"),e=n(e,"\u0107","c"),e=n(e,"\u01D8","v"),e=n(e,"\u0144","n"),e=n(e,"\u1E3F","m"),e=n(e,"\u01F9","n"),e=n(e,"\u01DC","v"),e=n(e,"\xE4","a"),e=n(e,"\xEB","e"),e=n(e,"\xEF","i"),e=n(e,"\xF6","o"),e=n(e,"\xFC","u"),e=n(e,"\u1E85","w"),e=n(e,"\xFF","y"),e=n(e,"\u1E8D","x"),e}function $(e){e=e.replace(/\r\n/g,`
`);let i="";for(let a=0;a<e.length;a++){const o=e.charCodeAt(a);o<128?i+=String.fromCharCode(o):o>127&&o<2048?(i+=String.fromCharCode(o>>6|192),i+=String.fromCharCode(o&63|128)):(i+=String.fromCharCode(o>>12|224),i+=String.fromCharCode(o>>6&63|128),i+=String.fromCharCode(o&63|128))}return i}function B(e){let i="",a=0,o=0,c=0,l=0;for(;a<e.length;)o=e.charCodeAt(a),o<128?(i+=String.fromCharCode(o),a++):o>191&&o<224?(c=e.charCodeAt(a+1),i+=String.fromCharCode((o&31)<<6|c&63),a+=2):(c=e.charCodeAt(a+1),l=e.charCodeAt(a+2),i+=String.fromCharCode((o&15)<<12|(c&63)<<6|l&63),a+=3);return i}u.cloneString=b,u.decodeUrl=T,u.extractFillData=h,u.fill=C,u.formatNumber=z,u.generateRandomString=S,u.getBaseName=f,u.getUrlSlug=x,u.htmlEntities=E,u.isBase64String=w,u.isEmail=A,u.isFilled=D,u.isString=g,u.kebabCaseToCamelCase=O,u.lpad=r,u.replaceAll=n,u.replaceSingleWhiteSpaces=t,u.stripTags=m,u.toString=d,u.trim=p,u.ucfirst=y,u.utf8Decode=B,u.utf8Encode=$,Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
