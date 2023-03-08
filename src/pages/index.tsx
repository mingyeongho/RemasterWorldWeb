import { GET_ALL_COUNTRIES } from "@/gql/GET_ALL_COUNTRIES";
import { GET_COUNTRIES_BY_CONTINENT } from "@/gql/GET_COUNTRIES_BY_CONTINENT";
import {
  getAllSimpleCountries,
  getCountries,
  getLikeCountries,
} from "@/gql/query";
import useForm from "@/hooks/useForm";
import { SimpleCountryLikeDTO } from "@/utils/interface";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import HomeTemplate from "../components/Templates/HomeTemplate/HomeTemplate";

type GetData = {
  countries: SimpleCountryLikeDTO[];
};

export default function IndexPage() {
  const router = useRouter();
  const { query } = router;
  const { input, onChange, onSearch } = useForm();

  const queryArg = () => {
    switch (query.continent) {
      case "All":
      case undefined:
        return GET_ALL_COUNTRIES;
      case "Like":
        return getLikeCountries({
          likeCountries: JSON.parse(
            localStorage.getItem("likeCountries") ?? ""
          ),
        });
      default:
        return getCountries({ continent: query.continent as string });
    }
  };

  const { data, loading } = useQuery<GetData>(queryArg());

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>404</div>;
  }

  return (
    <HomeTemplate
      value={input}
      onChange={onChange}
      onSearch={onSearch}
      countries={data.countries}
      qs={router.query.continent}
    />
  );
}
