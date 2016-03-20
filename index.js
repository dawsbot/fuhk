'use strict';
const badWords = require('./swearWords.json');

module.exports = function (str) {
  const argLength = arguments.length;

  // validate arguments
  if (typeof str !== 'string') {
    throw new TypeError(`Expected an object, got ${typeof str}`);
  }
  if (argLength !== 1) {
    throw new Error(`Expected 1 arguments, got ${argLength}`);
  }

  const reg = new RegExp('\\b' + badWords.join('\\b|\\b') + '\\b', 'gi');

  return str.match(reg) || [];
};
