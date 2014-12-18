var assert = require('assert'),
  reverse = require('./');

assert.equal(reverse(''), '');
assert.equal(reverse('a'), 'a');
assert.equal(reverse('𝌄'), '𝌄');
assert.equal(reverse('𝌄d'), 'd𝌄');
assert.equal(reverse('a𝌄'), '𝌄a');
assert.equal(reverse('abc'), 'cba');
assert.equal(reverse('abcd'), 'dcba');
assert.equal(reverse('ab𝌄de'), 'ed𝌄ba');
assert.equal(reverse('abc𝌄e'), 'e𝌄cba');

console.log('ok');
