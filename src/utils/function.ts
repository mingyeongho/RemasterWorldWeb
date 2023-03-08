import { GET_ALL_COUNTRIES } from "@/gql/GET_ALL_COUNTRIES";
import { GET_COUNTRIES_BY_CONTINENT } from "@/gql/GET_COUNTRIES_BY_CONTINENT";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { ContinentPalette, Palette } from "../styles/Palette";

export const getLinkHref = ({ label }: { label: string }) => {
  switch (label) {
    case "AS":
      return "/?continent=AS";
    case "EU":
      return "/?continent=EU";
    case "SA":
      return "/?continent=SA";
    case "NA":
      return "/?continent=NA";
    case "AF":
      return "/?continent=AF";
    case "AN":
      return "/?continent=AN";
    case "OC":
      return "/?continent=OC";
    case "Like":
      return "/";
    default:
      return "/";
  }
};

export const getContinentColor = ({ continent }: { continent: string }) => {
  switch (continent) {
    case "AS":
      return `${ContinentPalette.AS}`;
    case "EU":
      return `${ContinentPalette.EU}`;
    case "SA":
      return `${ContinentPalette.SA}`;
    case "NA":
      return `${ContinentPalette.NA}`;
    case "AF":
      return `${ContinentPalette.SA}`;
    case "AN":
      return `${ContinentPalette.AN}`;
    case "OC":
      return `${ContinentPalette.OC}`;
    case "ALL":
      return `${ContinentPalette.ALL}`;
    default:
      return `${Palette.Accent}`;
  }
};

// queryString(continent)에 따라 각 Continent에 맞는 색을 리턴
export const getTabBgColor = ({
  continent,
}: {
  continent: string | string[] | undefined;
}) => {
  if (typeof continent === "string") {
    switch (continent) {
      case "AS":
        return `${ContinentPalette.AS}`;
      case "EU":
        return `${ContinentPalette.EU}`;
      case "SA":
        return `${ContinentPalette.SA}`;
      case "NA":
        return `${ContinentPalette.NA}`;
      case "AF":
        return `${ContinentPalette.SA}`;
      case "AN":
        return `${ContinentPalette.AN}`;
      case "OC":
        return `${ContinentPalette.OC}`;
      default:
        return `${Palette.Accent}`;
    }
  }
  if (typeof continent === "undefined") {
    return `${ContinentPalette.ALL}`;
  }
  return `${Palette.Accent}`;
};

// 현재 어떤 TabMenu를 선택했는지 알기 위한 함수
export const isFocusTabMenu = ({
  qs,
  label,
}: {
  qs: string | string[] | undefined;
  label: string;
}) => {
  if (typeof qs === "undefined") {
    return label === "ALL" && true;
  }
  if (qs === label) {
    return true;
  }
  return false;
};

export const onAddLikeCountries = (e: React.MouseEvent, code: string) => {
  e.preventDefault();

  const getLikeCountries = localStorage.getItem("likeCountries");

  if (!getLikeCountries) {
    localStorage.setItem("likeCountries", JSON.stringify([code]));
    return;
  }

  const parseGetLikeCountries: string[] = JSON.parse(getLikeCountries);
  const newLikeCountries = JSON.stringify(parseGetLikeCountries.concat(code));

  localStorage.setItem("likeCountries", newLikeCountries);
};

export const getQuery = (query: ParsedUrlQuery) => {
  if (!query) return GET_ALL_COUNTRIES;

  return GET_COUNTRIES_BY_CONTINENT;
};

export const getQueryOption = (query: ParsedUrlQuery) => {
  if (!query) return;

  return {
    variables: {
      continent: {
        eq: query.continent,
      },
    },
  };
};
