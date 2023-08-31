# eu-country-check

This project is to check if given country-code/country-name is part of the EU (European Union) or EEA (European Economic Area).

# Installation

`npm i eu-country-check`

or

`yarn add eu-country-check`

Then...

```typescript
import { isEUCountry, isEEACountry } from "eu-country-check";

console.log(isEUCountry("040")); // { name: 'Austria', alpha2: 'AT', alpha3: 'AUT', numeric: '040' }
console.log(isEEACountry("NO")); // { name: 'Norway', alpha2: 'NO', alpha3: 'NOR', numeric: '578' }
```

## Functions

**eu-country-check** contains 2 functions:

- `isEUCountry(countryCode: string)`
- `isEEACountry(countryCode: string)`

~ &nbsp;"_countryCode_" is required parameter that could be name, alpha2, alpha3 or numeric code.
