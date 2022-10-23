export interface Country {
  name: string;
  flags: Flags;
  translations: Translations;
  cca3: string;
  population: number;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  currencies: {
    [key: string]: Currency;
  };
}

interface Flags {
  png: string;
  svg: string;
}

interface Translations {
  pol: Translation;
}

interface Translation {
  common: string;
  official: string;
}

export interface Currency {
  name: string;
  symbol: string;
}
