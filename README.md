<div align="center">
  
# eu-country-check

> This package is to check if the given country-code/country-name is part of the EU (European Union) or EEA (European Economic Area).

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/Sunny-unik/eu-country-check)
[![Publish on NPMJS](https://github.com/Sunny-unik/eu-country-check/actions/workflows/publish-on-npmjs.yml/badge.svg)](https://github.com/Sunny-unik/eu-country-check/actions/workflows/publish-on-npmjs.yml)

</div>

# Installation

```bash
npm i eu-country-check
```

or

```bash
yarn add eu-country-check
```

Then...

```typescript
import { isEUCountry, isEEACountry } from "eu-country-check";

console.log(isEUCountry("040")); // { name: 'Austria', alpha2: 'AT', alpha3: 'AUT', numeric: '040' }
console.log(isEEACountry("NO")); // { name: 'Norway', alpha2: 'NO', alpha3: 'NOR', numeric: '578' }
console.log(isEUCountry("NO")); // undefined
console.log(isEEACountry("CA")); // undefined
```

## Functions

**eu-country-check** contains 2 functions:

- `isEUCountry(countryCode: string)`
- `isEEACountry(countryCode: string)`

~ &nbsp;"_countryCode_" is required parameter that could be name, alpha2, alpha3 or numeric code.

## ⚖️ LICENSE

MIT © [Sunny-unik/eu-country-check](LICENSE)
