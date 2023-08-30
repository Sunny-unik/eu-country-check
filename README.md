# eu-country-check

This project is to check if given country-code is part of the EU (European Union).

# Installation

`npm i eu-country-check`

or

`yarn add eu-country-check`

Then...

```javascript
import { isEuCountry } from "eu-country-check";
console.log(isEuCountry("AT")); //true
```

## Functions

**eu-country-check** contains 2 functions:

- `isEuCountry(countryCode:string)` - _countryCode_ (alpha2) is required.
- `listEuCodes()`
