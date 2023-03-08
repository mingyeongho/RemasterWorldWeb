export interface SimpleCountryDTO {
  code: string;
  name: string;
  continent: ContinentDTO;
  languages: LanguageDTO[];
  emoji: string;
}

export interface SimpleCountryLikeDTO extends SimpleCountryDTO {
  isLike: boolean;
}

export interface CountryDTO extends SimpleCountryDTO {
  native: string;
  phone: string;
  capital: string;
  currency: string;
  states: StateDTO[];
}

export interface ContinentDTO {
  code: string;
  name: string;
}

export interface LanguageDTO {
  code: string;
  name: string;
  native: string;
  rtl: boolean;
}

export interface StateDTO {
  code: string;
  name: string;
}
