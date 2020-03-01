# get-in-range


input      | min      | max      | onerr (optional)
-----------|----------|----------|--------
Given input | Minimum value of range | Maximum value of range | set to true to return NaN instead of throwing error

```getInRange(input, min, max[, onerr]) => number```

```
const gir = require('get-in-range');

gir(10,5,20) => 10
gir(30,5,20) => 20
gir(-20,-5,25) => -5
```

## License

LGPL-3.0
