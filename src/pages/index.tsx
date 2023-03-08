import { GET_ALL_COUNTRIES } from "@/gql/GET_ALL_COUNTRIES";
import { GET_COUNTRIES_BY_CONTINENT } from "@/gql/GET_COUNTRIES_BY_CONTINENT";
import { getAllSimpleCountries, getCountries } from "@/gql/query";
import { getQuery, getQueryOption } from "@/utils/function";
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
  const [input, setInput] = useState("");

  const queryArg = () => {
    switch (query.continent) {
      case "All":
      case undefined:
        return getAllSimpleCountries;

      default:
        return getCountries({ continent: query.continent as string });
    }
  };

  const { data, loading } = useQuery<GetData>(queryArg());

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/${input.toUpperCase()}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>404</div>;
  }

  console.log(data);

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
