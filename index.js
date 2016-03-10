'use strict';
const fs = require('fs');

module.exports = function () {
  const argLength = arguments.length;
  const arg1 = arguments[0];

  // validate arguments
  if (argLength !== 1) {
    throw new Error(`Expected 1 arguments, got ${argLength}`);
  }
  const badWords = JSON.parse(fs.readFileSync('swearWords.json', 'utf8'));
  let matches = [];
  const reg = new RegExp( '\\b' + badWords.join('\\b|\\b') + '\\b', 'gi');

  return arg1.match(reg)
};
