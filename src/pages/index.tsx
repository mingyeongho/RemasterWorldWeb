import { GET_ALL_COUNTRIES } from "@/gql/GET_ALL_COUNTRIES";
import { GET_COUNTRIES_BY_CONTINENT } from "@/gql/GET_COUNTRIES_BY_CONTINENT";
import { SimpleCountryDTO } from "@/utils/interface";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import HomeTemplate from "../components/Templates/HomeTemplate/HomeTemplate";

type GetData = {
  countries: SimpleCountryDTO[];
};

export default function IndexPage() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const { data, loading } = useQuery<GetData>(GET_ALL_COUNTRIES);

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
