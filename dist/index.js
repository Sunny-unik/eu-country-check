"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEuCodes = exports.isEuCountry = void 0;
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
exports.isEuCountry = isEuCountry;
const listEuCodes = () => EuCountries;
exports.listEuCodes = listEuCodes;
