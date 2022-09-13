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

