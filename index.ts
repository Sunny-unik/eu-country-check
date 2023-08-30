// List of CountryCodes that consists in european countries
const EuCountries: string[] = [
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

export const isEuCountry = (countryCode: string): boolean =>
  EuCountries.includes(countryCode);

export const listEuCodes = (): string[] => EuCountries;
