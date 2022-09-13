import {
  cloneString, formatNumber,
  generateRandomString, getBaseName,
  htmlEntities,
  isEmail,
  isFilled,
  isString,
  kebabCaseToCamelCase,
  replaceAll,
  replaceSingleWhiteSpaces,
  stripTags,
  toString,
  trim,
  ucfirst,
  utf8Decode,
  utf8Encode,
} from '../src';

test('generate random string with default characters', () => {
  expect(generateRandomString()).toMatch(/[a-zA-Z0-9]{10}/);
});

test('generate random string with 12 characters', () => {
  expect(generateRandomString(12)).toMatch(/[a-zA-Z0-9]{12}/);
});

test('strip tags', () => {
  expect(stripTags('<span>Hola mundo</span>', '')).toEqual('Hola mundo');
});

test('strip tags excluding tag', () => {
  expect(stripTags('<span>Hola mundo</span>', '<span>')).toEqual(
    '<span>Hola mundo</span>'
  );
});

test('htmlEntities', () => {
  expect(htmlEntities('<span class="test">&</span>')).toEqual(
    '&lt;span class=&quot;test&quot;&gt;&amp;&lt;/span&gt;'
  );
});

test('replaceAll', () => {
  expect(replaceAll('lorem ipsum dolor', 'r', 'R')).toEqual(
    'loRem ipsum doloR'
  );
});

test('replaceSingleWhiteSpaces', () => {
  expect(replaceSingleWhiteSpaces('lorem ipsum dolor', '_')).toEqual(
    'lorem_ipsum_dolor'
  );
});

test('trim', () => {
  expect(trim('   lorem ipsum dolor   ')).toEqual('lorem ipsum dolor');
});

test('isFilled: true', () => {
  expect(isFilled('   lorem ipsum dolor   ')).toEqual(true);
});

test('isFilled: false', () => {
  expect(isFilled('')).toEqual(false);
});

test('kebabCaseToCamelCase', () => {
  expect(kebabCaseToCamelCase('lorem-ipsum-dolor-sit-amet')).toEqual(
    'loremIpsumDolorSitAmet'
  );
});

test('ucfirst', () => {
  expect(ucfirst('lorem ipsum dolor')).toEqual('Lorem ipsum dolor');
});

test('isString: true', () => {
  expect(isString('lorem ipsum dolor')).toEqual(true);
});

test('isString: false', () => {
  expect(isString(43)).toEqual(false);
});

test('isString: true', () => {
  expect(isEmail('test@outlook.com')).toEqual(true);
});

test('isString: false', () => {
  expect(isEmail('test.outlook.com')).toEqual(false);
});

test('isString: false 2', () => {
  expect(isEmail('test@ou')).toEqual(false);
});

test('toString: number', () => {
  expect(toString(43)).toEqual('43');
});

test('toString: array', () => {
  expect(toString([43, 44])).toEqual('43,44');
});

test('cloneString', () => {
  expect(cloneString('lorem')).toEqual('lorem');
});

test('utf8Encode', () => {
  expect(utf8Encode('lorem')).toEqual('lorem');
});

test('utf8Decode', () => {
  expect(utf8Decode('lorem')).toEqual('lorem');
});

test('getBaseName windows', () => {
  expect(getBaseName('C:\\\\temp\\filename.txt')).toEqual('filename');
});

test('getBaseName unix', () => {
  expect(getBaseName('/temp/filename.txt')).toEqual('filename');
});

test('formatNumber 1', () => {
  expect(formatNumber(24.89, 2, '.', ',')).toEqual('24.89');
});

test('formatNumber 2', () => {
  expect(formatNumber(2224.89, 2, '.', ',')).toEqual('2,224.89');
});
