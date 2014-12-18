var assert = require('assert'),
  reverse = require('./');

assert.equal(reverse('abcd'), 'dcba');
assert.equal(reverse('abc'), 'cba');
assert.equal(reverse('ab𝌄de'), 'ed𝌄ba');
assert.equal(reverse('abc𝌄e'), 'e𝌄cba');
assert.equal(reverse('𝌄d'), 'd𝌄');
assert.equal(reverse('a𝌄'), '𝌄a');

console.log('ok');
