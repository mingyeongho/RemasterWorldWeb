import {
  CountryDTO,
  SimpleCountryDTO,
  SimpleCountryLikeDTO,
} from "./interface";

export const setContinentDummyCountry = (
  continent: string
): SimpleCountryLikeDTO => {
  return {
    code: "KR",
    name: "Korea",
    continent: {
      code: continent,
      name: "Asia",
    },
    emoji: "π°π·",
    languages: [
      {
        code: "KR",
        name: "Korean",
        native: "νκ΅­μ΄",
        rtl: false,
      },
    ],
    isLike: false,
  };
};

export const DummyCountryAS: SimpleCountryDTO = {
  code: "KR",
  name: "Korea",
  continent: {
    code: "AS",
    name: "Asia",
  },
  emoji: "π°π·",
  languages: [
    {
      code: "KR",
      name: "Korean",
      native: "νκ΅­μ΄",
      rtl: false,
    },
  ],
};

export const DummyCountries: SimpleCountryDTO[] = [
  DummyCountryAS,
  DummyCountryAS,
  DummyCountryAS,
  DummyCountryAS,
];

export const DummyCountryInfo: CountryDTO = {
  code: "KR",
  name: "South Korea",
  native: "λνλ―Όκ΅­",
  phone: "82",
  continent: {
    code: "AS",
    name: "Asia",
  },
  capital: "Seoul",
  currency: "KRW",
  languages: [
    {
      code: "ko",
      name: "Korean",
      native: "νκ΅­μ΄",
      rtl: false,
    },
  ],
  emoji: "π°π·",
  states: [],
};
