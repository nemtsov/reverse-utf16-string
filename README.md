# Reverse UTF-16 String

Optimized reverse-string algorithm, which only
needs to traverse 1/2 of the given string, and
takes care of surrogate pairs.

## Usage

```javascript
var reverse = require('reverse-utf16-string');

var reversed = reverse('abcd'); // 'dcba'
```

## License

[MIT](/LICENSE)
