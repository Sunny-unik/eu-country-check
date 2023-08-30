"use strict";
// List of CountryCodes that consists in european countries
const EuCountries = [
    "AT",
    "BE",
    "BG",
    "HR",
    "CY",
    "CZ",
    "DK",
    "EE",
    "FI",
    "FR",
    "DE",
    "GR",
    "HU",
    "IE",
    "IT",
    "LV",
    "LT",
    "LU",
    "MT",
    "NL",
    "PL",
    "PT",
    "RO",
    "SK",
    "SI",
    "ES",
    "SE",
];
const isEuCountry = (countryCode) => EuCountries.includes(countryCode);
const listEuCodes = () => EuCountries;
module.exports = {
    isEuCountry: isEuCountry,
    listEuCodes: listEuCodes,
};
//# sourceMappingURL=index.js.map