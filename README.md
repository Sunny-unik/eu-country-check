# eu-country-check

This project is to check provided country code belongs from European countries or not.

# Installation

`npm i eu-country-check`

or

`yarn add eu-country-check`

Then...

```javascript
import { isEuCountry } from 'eu-country-check';
console.log(isEuCountry('AX')); //true
```

## Options

**eu-country-check** contains 4 functions:

- `isEuCountry(countryCode:string)` - _countryCode_ is required.
- `listEuCodes()`
