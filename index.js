'use strict';
const badWords = require('./swearWords.json');

module.exports = function (str) {
  // validate arguments
  if (typeof str !== 'string') {
    throw new TypeError(`Expected an object, got ${typeof str}`);
  }
  const reg = new RegExp(badWords.join('|'), 'gi');

  return str.match(reg) || [];
};
