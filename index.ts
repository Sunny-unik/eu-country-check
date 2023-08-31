import { CountriesInfoInterface, EuCountries, EeaCountries } from "./data";

const isEqual = (str1: string, str2: string) =>
  str1.toLowerCase() === str2.toLowerCase();

const getValidator = (countryInput: string) => {
  if (!!+countryInput)
    return (item: CountriesInfoInterface) => countryInput + "" === item.numeric;
  if (countryInput.length === 2)
    return (item: CountriesInfoInterface) => isEqual(countryInput, item.alpha2);
  if (countryInput.length === 3)
    return (item: CountriesInfoInterface) => isEqual(countryInput, item.alpha3);
  return (item: CountriesInfoInterface) => isEqual(countryInput, item.name);
};

const commonProvider =
  (validList: CountriesInfoInterface[]) =>
  (countryInput: string): false | undefined | CountriesInfoInterface =>
    !countryInput ? false : validList.find(getValidator(countryInput));

export const isEUCountry = commonProvider(EuCountries);
export const isEEACountry = commonProvider(EeaCountries);
