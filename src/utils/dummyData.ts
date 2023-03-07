import { CountryDTO, SimpleCountryDTO } from "./interface";

export const setContinentDummyCountry = (continent: string) => {
  return {
    code: "KR",
    name: "Korea",
    continent: {
      code: continent,
      name: "Asia",
    },
    emoji: "🇰🇷",
    languages: [
      {
        code: "KR",
        name: "Korean",
        native: "한국어",
        rtl: false,
      },
    ],
  };
};

export const DummyCountryAS: SimpleCountryDTO = {
  code: "KR",
  name: "Korea",
  continent: {
    code: "AS",
    name: "Asia",
  },
  emoji: "🇰🇷",
  languages: [
    {
      code: "KR",
      name: "Korean",
      native: "한국어",
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
  native: "대한민국",
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
      native: "한국어",
      rtl: false,
    },
  ],
  emoji: "🇰🇷",
  states: [],
};
