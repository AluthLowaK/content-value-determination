# letter-frequency [![Build Status](https://travis-ci.org/ziyaddin/letter-frequency.svg?branch=master)](https://travis-ci.org/ziyaddin/letter-frequency)

>Count letter frequency in a text


## Install

```
$ npm install --save letter-frequency
```


## Usage

```js
const letterFrequency = require('letter-frequency');

letterFrequency('Hello World', 'name');
/*=> [ [ 'a', 0 ],
  [ 'b', 0 ],
  [ 'c', 0 ],
  [ 'd', 1 ],
  [ 'e', 1 ],
  [ 'f', 0 ],
  [ 'g', 0 ],
  [ 'h', 1 ],
  [ 'i', 0 ],
  [ 'j', 0 ],
  [ 'k', 0 ],
  [ 'l', 3 ],
  [ 'm', 0 ],
  [ 'n', 0 ],
  [ 'o', 2 ],
  [ 'p', 0 ],
  [ 'q', 0 ],
  [ 'r', 1 ],
  [ 's', 0 ],
  [ 't', 0 ],
  [ 'u', 0 ],
  [ 'v', 0 ],
  [ 'w', 1 ],
  [ 'x', 0 ],
  [ 'y', 0 ],
  [ 'z', 0 ] ] */
```


## API

### letter-frequency(input, sorting)

#### input

Type: `string`

Input string given by the user.

#### sorting

Type: `string`<br>
Default: `name`<br>
Options: `name`, `value`

Sorting method of letters.


## License

MIT © [Ziyaddin Sadigov](https://github.com/ziyaddin)
