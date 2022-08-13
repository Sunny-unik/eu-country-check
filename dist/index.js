"use strict";
//List of CountryCodes that that cosists in european countries
const EuCountries = [
    "AX",
    "AL",
    "AD",
    "AT",
    "BY",
    "BE",
    "BA",
    "BG",
    "HR",
    "CZ",
    "DK",
    "EE",
    "FO",
    "FI",
    "FR",
    "DE",
    "GI",
    "GR",
    "GG",
    "VA",
    "HU",
    "IS",
    "IE",
    "IM",
    "IT",
    "JE",
    "LV",
    "LI",
    "LT",
    "LU",
    "MT",
    "MD",
    "MC",
    "ME",
    "NL",
    "MK",
    "NO",
    "PL",
    "PT",
    "RO",
    "RU",
    "SM",
    "RS",
    "SK",
    "SI",
    "ES",
    "SJ",
    "SE",
    "CH",
    "UA",
    "GB"
];
const isEuCountry = (countryCode) => EuCountries.includes(countryCode);
const listEuCodes = () => EuCountries;
// const listEuCountries = () => Object.values(EuCountries);
// const listEuCodesAndCountries = () => EuCountries;
module.exports = {
    isEuCountry: isEuCountry,
    listEuCodes: listEuCodes,
    // listEuCountries: listEuCountries,
    // listEuCodesAndCountries: listEuCodesAndCountries,
};
//# sourceMappingURL=index.js.map