/*jshint bitwise:false */

var MIN_HIGH_SURROGATE = '\uD800',
  MAX_HIGH_SURROGATE = '\uDBFF',
  MIN_LOW_SURROGATE  = '\uDC00',
  MAX_LOW_SURROGATE  = '\uDFFF';

module.exports = function reverse(str) {
  var out = new Array(str.length),
    hasSurrogate = false,
    mid = str.length >> 1,
    i, j, c1, c2;

  for (i = 0, j = str.length - 1; j >= mid; i++, j--) {
    c1 = str[i];
    out[i] = str[j];
    out[j] = c1;
    if (!hasSurrogate) {
      hasSurrogate = (c1 >= MIN_HIGH_SURROGATE) &&
        (c1 <= MAX_LOW_SURROGATE);
    }
  }

  if (hasSurrogate) {
    for (i = 0; i < out.length; i++) {
      c1 = out[i];
      if (c1 >= MIN_LOW_SURROGATE && c1 <= MAX_LOW_SURROGATE) {
        c2 = out[i + 1];
        if (c2 >= MIN_HIGH_SURROGATE && c2 <= MAX_HIGH_SURROGATE) {
          out[i + 1] = c1;
          out[i] = c2;
        }
      }
    }
  }

  return out.join('');
};
