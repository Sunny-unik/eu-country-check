"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEEACountry = exports.isEUCountry = void 0;
const data_1 = require("./data");
const isEqual = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();
const getValidator = (countryInput) => {
    if (!!+countryInput)
        return (item) => countryInput + "" === item.numeric;
    if (countryInput.length === 2)
        return (item) => isEqual(countryInput, item.alpha2);
    if (countryInput.length === 3)
        return (item) => isEqual(countryInput, item.alpha3);
    return (item) => isEqual(countryInput, item.name);
};
const commonProvider = (validList) => (countryInput) => !countryInput ? false : validList.find(getValidator(countryInput));
exports.isEUCountry = commonProvider(data_1.EuCountries);
exports.isEEACountry = commonProvider(data_1.EeaCountries);
