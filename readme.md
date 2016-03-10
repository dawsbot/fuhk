# fuhk
[![npm version](https://img.shields.io/npm/v/fuhk.svg)](https://www.npmjs.com/package/fuhk)
[![Build Status](https://travis-ci.org/dawsonbotsford/fuhk.svg?branch=master)](https://travis-ci.org/dawsonbotsford/fuhk)
[![npm download count](http://img.shields.io/npm/dm/fuhk.svg?style=flat)](http://npmjs.org/fuhk)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> returns all &#34;bad words&#34; found in a JavaScript variable

<br>

**Warning - parts of this are NSFW due to the nature of the module**

## Install

```
npm install --save fuhk
```


<br>

## Usage

```js
const fuhk = require('fuhk');

fuhk('shit fuck rubber duck');
//=> ['shit', 'fuck']

fuhk('nothing bad here!');
//=> []
```

<br>

## API

### fuhk(target)

##### target

Type: `string`


##### return value

Type: `array`

Returns all &#34;bad words&#34; found in a JavaScript variable. Strips punctuation and preserves capitalization. If none are found, and empty array is returned.

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

<br>

---
If you like this, star it. If you want to follow me, follow me.
