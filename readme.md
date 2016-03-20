# fuhk
[![npm version](https://img.shields.io/npm/v/fuhk.svg)](https://www.npmjs.com/package/fuhk)
[![npm download count](http://img.shields.io/npm/dm/fuhk.svg?style=flat)](http://npmjs.org/fuhk)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

<table>
  <thead>
    <tr>
      <th>Linux</th>
      <th>OS X</th>
      <th>Windows</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" align="center">
        <a href="https://travis-ci.org/dawsonbotsford/fuhk"><img src="https://api.travis-ci.org/dawsonbotsford/fuhk.svg?branch=master"></a>
      </td>
      <td align="center">
        <a href="https://ci.appveyor.com/project/dawsonbotsford/fuhk"><img src="https://ci.appveyor.com/api/projects/status/6tridf5r7sgn74i7?svg=true"></a>
      </td>
    </tr>
  </tbody>
</table>

<br>

> Return all "bad words" found in a JavaScript string

<br>

**Warning - parts of this are NSFW due to the nature of the module**

## Install

```
npm install --save fuhk
```


<br>

## Usage

#### Node

```js
const fuhk = require('fuhk');

fuhk('shit fuck rubber duck');
//=> ['shit', 'fuck']

fuhk('nothing bad here!');
//=> []
```

<br>

#### Web

```html
<script src="https://rawgit.com/dawsonbotsford/fuhk/master/bundle.js"></script>
<script>
  alert(fuhk('shit fuck rubber duck'));
  //=> ['shit', 'fuck']
</script>
```

<br>

Or download it with `npm install --save fuhk` and reference it as:
```html
<script src="node_modules/fuhk/bundle.js"></script>
```

<br>

## API

### fuhk(target)

##### target

Type: `string`


##### return value

Type: `array`

Returns all "bad words" found in a JavaScript string. Strips punctuation and preserves capitalization. If none are found, an empty array is returned.

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

<br>

---
If you like this, star it. If you want to follow me, follow me.
