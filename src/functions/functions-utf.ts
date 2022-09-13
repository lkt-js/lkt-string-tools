export function utf8Encode(string: string) {
  string = string.replace(/\r\n/g, '\n');
  let r = '';

  for (let n = 0; n < string.length; n++) {
    const c = string.charCodeAt(n);

    if (c < 128) {
      r += String.fromCharCode(c);
    } else if (c > 127 && c < 2048) {
      r += String.fromCharCode((c >> 6) | 192);
      r += String.fromCharCode((c & 63) | 128);
    } else {
      r += String.fromCharCode((c >> 12) | 224);
      r += String.fromCharCode(((c >> 6) & 63) | 128);
      r += String.fromCharCode((c & 63) | 128);
    }
  }

  return r;
}

export function utf8Decode(text: string) {
  let r = '',
    i = 0,
    c = 0,
    c2 = 0,
    c3 = 0;

  while (i < text.length) {
    c = text.charCodeAt(i);

    if (c < 128) {
      r += String.fromCharCode(c);
      i++;
    } else if (c > 191 && c < 224) {
      c2 = text.charCodeAt(i + 1);
      r += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
      i += 2;
    } else {
      c2 = text.charCodeAt(i + 1);
      c3 = text.charCodeAt(i + 2);
      r += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
      i += 3;
    }
  }

  return r;
}
