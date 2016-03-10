'use strict';
const fs = require('fs');
const path = require('path');

module.exports = function (str) {
  const argLength = arguments.length;

  // validate arguments
  if (typeof str !== 'string') {
    throw new TypeError(`Expected an object, got ${typeof str}`);
  }
  if (argLength !== 1) {
    throw new Error(`Expected 1 arguments, got ${argLength}`);
  }

  const badWords = JSON.parse(fs.readFileSync(path.join(__dirname, 'swearWords.json'), 'utf8'));
  const reg = new RegExp('\\b' + badWords.join('\\b|\\b') + '\\b', 'gi');

  return str.match(reg) || [];
};
