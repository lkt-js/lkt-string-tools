# LKT String Tools



## Functions: Generators

### generateRandomString

Returns a random string

#### Args
- length <int> (default: 10)

#### Usage

```js
import {generateRandomString} from "lkt-string-tools";

const str1 = generateRandomString();
const str2 = generateRandomString(14);
```


## Functions: HTML

### stripTags

Removes HTML tags from `input` except if defined in `allowed`

#### Args
- input <string>
- allowed <string>
  - The format is like following: `<a><b><c>` (only tags in lowercase)

#### Usage

```js
import {stripTags} from "lkt-string-tools";

const str1 = stripTags('<span>Hello world</span>', ''); // Returns "Hello world"
const str2 = stripTags('<span>Hello world</span>', '<span>'); // Returns "<span>Hello world</span>"
```

### htmlEntities

Convert `input` to HTML entities

#### Args
- input <string>

#### Usage

```js
import {htmlEntities} from "lkt-string-tools";

const str1 = htmlEntities('lorem ipsum dolor sit amet');
```


## Functions: replacements

### replaceAll

Replaces all occurrences of `search` in `target` with `replacement`

#### Args
- target <string>
- search <string>
- replacement <string>

#### Usage

```js
import {replaceAll} from "lkt-string-tools";

const str1 = replaceAll('hey you!', 'h', 'H');
```

### replaceSingleWhiteSpaces

Replaces all whitespaces which only has one occurrence at a time in `target` with `replacement`

#### Args
- target <string>
- replacement <string>

#### Usage

```js
import {replaceSingleWhiteSpaces} from "lkt-string-tools";

const str1 = replaceAll('hey you!', '_');
```

### trim

Removes starting and ending whitespaces from `target`

#### Args
- target <string>

#### Usage

```js
import {trim} from "lkt-string-tools";

const str1 = trim('   lorem ipsum   ');
```


## Functions: status

### isFilled

Checks if a string has content of it's empty

#### Args
- string <string>

#### Usage

```js
import {isFilled} from "lkt-string-tools";

if (isFilled('lorem')) {
    //do something
}
```

### isBase64Image

Checks if a string is base64 encoded image

#### Args
- string <string>

#### Usage

```js
import {isBase64Image} from "lkt-string-tools";

if (isBase64Image('lorem')) {
    //do something
}
```


## Functions: text style

### kebabCaseToCamelCase

Convert from kebab case to camel case

#### Args
- string <string>

#### Usage

```js
import {kebabCaseToCamelCase} from "lkt-string-tools";

console.log(kebabCaseToCamelCase('lorem-ipsum-dolor-sit-amet'))
```

### ucfirst

Converts first letter to uppercase

#### Args
- string <string>

#### Usage

```js
import {ucfirst} from "lkt-string-tools";

console.log(ucfirst('lorem ipsum'))
```

### formatNumber

Format a number

#### Args
- number <number>
- decimals <number>
- decimalPoint <string>
- thousandsSeparator <string>

#### Usage

```js
import {formatNumber} from "lkt-string-tools";

console.log(formatNumber(20, 2, '.', ',')) // 20.00
console.log(formatNumber(2000, 4, '.', ','))// 2,000.0000
```


## Functions: typing

### isString

Checks if a given var is string

#### Args
- var <any>

#### Usage

```js
import {isString} from "lkt-string-tools";

console.log(isString('lorem-ipsum-dolor-sit-amet'))
```

### isEmail

Checks if a given string content has email format

#### Args
- string <string>

#### Usage

```js
import {isEmail} from "lkt-string-tools";

console.log(isEmail('lorem ipsum'))
```

### toString

Cast to string

#### Args
- var <any>

#### Usage

```js
import {toString} from "lkt-string-tools";

console.log(toString(20))
```

### cloneString

Creates a copy of the string without the reference to the original var.

#### Args
- string <string>

#### Usage

```js
import {cloneString} from "lkt-string-tools";

console.log(cloneString('my awesome string'))
```


## Functions: url

### decodeUrl

Decodes and url encoded string

#### Args
- string <string>

#### Usage

```js
import {decodeUrl} from "lkt-string-tools";

console.log(decodeUrl('lorem-ipsum-dolor-sit-amet'))
```

### getUrlSlug

Removes invalid chars to retrieve a nice url slug

#### Args
- string <string>

#### Usage

```js
import {getUrlSlug} from "lkt-string-tools";

console.log(getUrlSlug('lorem ipsum'))
```


## Functions: UTF

### utf8Encode

Encodes to UTF8

#### Args
- string <string>

#### Usage

```js
import {utf8Encode} from "lkt-string-tools";

console.log(utf8Encode('lorem-ipsum-dolor-sit-amet'))
```

### utf8Decode

Decodes from UTF8

#### Args
- string <string>

#### Usage

```js
import {utf8Decode} from "lkt-string-tools";

console.log(utf8Decode('lorem ipsum'))
```