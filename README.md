# Reverse UTF-16 String [![Build Status](http://travis-ci.org/nemtsov/reverse-utf16-string.png)](http://travis-ci.org/nemtsov/reverse-utf16-string) [![NPM version](https://badge.fury.io/js/reverse-utf16-string.svg)](http://badge.fury.io/js/reverse-utf16-string)

Optimized reverse-string algorithm, which only
needs to traverse 1/2 of the given string, and
takes care of UTF-16 surrogate pairs.

## Usage

```javascript
var reverse = require('reverse-utf16-string');

var reversed = reverse('abcd'); // 'dcba'
```

## License

[MIT](/LICENSE)
