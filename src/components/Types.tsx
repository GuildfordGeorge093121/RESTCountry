import { ApiType } from "./APIType";

export type CountryType = {
  flag: string;
  name: string;
  nativeName: string;
  population: string;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: string[] | Currencies;
  languages: string[] | Languages;
  borders: string[];
  alpha3Code: string;
};

export type Languages={
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

export type Currencies={
    code: string;
    name: string;
    symbol: string;
}



export type APIFilter=(data:ApiType[])=>CountryType[]