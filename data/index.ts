export interface CountriesInfoInterface {
  name: string;
  alpha2: string;
  alpha3: string;
  numeric: string;
}

export const EuCountries: CountriesInfoInterface[] = [
  { name: "Austria", alpha2: "AT", alpha3: "AUT", numeric: "040" },
  { name: "Belgium", alpha2: "BE", alpha3: "BEL", numeric: "056" },
  { name: "Bulgaria", alpha2: "BG", alpha3: "BGR", numeric: "100" },
  { name: "Croatia", alpha2: "HR", alpha3: "HRV", numeric: "191" },
  { name: "Cyprus", alpha2: "CY", alpha3: "CYP", numeric: "196" },
  { name: "Czech Republic", alpha2: "CZ", alpha3: "CZE", numeric: "203" },
  { name: "Denmark", alpha2: "DK", alpha3: "DNK", numeric: "208" },
  { name: "Estonia", alpha2: "EE", alpha3: "EST", numeric: "233" },
  { name: "Finland", alpha2: "FI", alpha3: "FIN", numeric: "246" },
  { name: "France", alpha2: "FR", alpha3: "FRA", numeric: "250" },
  { name: "Germany", alpha2: "DE", alpha3: "DEU", numeric: "276" },
  { name: "Greece", alpha2: "GR", alpha3: "GRC", numeric: "300" },
  { name: "Hungary", alpha2: "HU", alpha3: "HUN", numeric: "348" },
  { name: "Ireland", alpha2: "IE", alpha3: "IRL", numeric: "372" },
  { name: "Italy", alpha2: "IT", alpha3: "ITA", numeric: "380" },
  { name: "Latvia", alpha2: "LV", alpha3: "LVA", numeric: "428" },
  { name: "Lithuania", alpha2: "LT", alpha3: "LTU", numeric: "440" },
  { name: "Luxembourg", alpha2: "LU", alpha3: "LUX", numeric: "442" },
  { name: "Malta", alpha2: "MT", alpha3: "MLT", numeric: "470" },
  { name: "Netherlands", alpha2: "NL", alpha3: "NLD", numeric: "528" },
  { name: "Poland", alpha2: "PL", alpha3: "POL", numeric: "616" },
  { name: "Portugal", alpha2: "PT", alpha3: "PRT", numeric: "620" },
  { name: "Romania", alpha2: "RO", alpha3: "ROU", numeric: "642" },
  { name: "Slovakia", alpha2: "SK", alpha3: "SVK", numeric: "703" },
  { name: "Slovenia", alpha2: "SI", alpha3: "SVN", numeric: "705" },
  { name: "Spain", alpha2: "ES", alpha3: "ESP", numeric: "724" },
  { name: "Sweden", alpha2: "SE", alpha3: "SWE", numeric: "752" },
];

export const EeaCountries = [
  { name: "Iceland", alpha2: "IS", alpha3: "ISL", numeric: "352" },
  { name: "Liechtenstein", alpha2: "LI", alpha3: "LIE", numeric: "438" },
  { name: "Norway", alpha2: "NO", alpha3: "NOR", numeric: "578" },
  ...EuCountries,
];
