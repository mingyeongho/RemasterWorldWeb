import { getCountry } from "../gql/query";
import { CountryDTO } from "../utils/interface";
import { useQuery } from "@apollo/client";
import router, { useRouter } from "next/router";
import CountryTemplate from "../components/Templates/CountryTemplate/CountryTemplate";
import { ChangeEvent, FormEvent, useState } from "react";

type GetData = {
  country: CountryDTO | null;
};

const CountryPage = () => {
  const { query } = useRouter();
  const { data, loading } = useQuery<GetData>(
    getCountry({ name: query.country as string })
  );
  const [input, setInput] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/${input.toUpperCase()}`);
    setInput("");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>404</div>;
  }

  if (!data.country) {
    return <div>404</div>;
  }

  return (
    <CountryTemplate
      value={input}
      onChange={onChange}
      onSearch={onSearch}
      countryInfo={data.country}
    />
  );
};

export default CountryPage;
