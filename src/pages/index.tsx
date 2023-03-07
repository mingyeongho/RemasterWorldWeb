import { getAllSimpleCountries } from "@/gql/query";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import HomeTemplate from "../components/Templates/HomeTemplate/HomeTemplate";

export default function IndexPage() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const { data, loading } = useQuery(getAllSimpleCountries);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/${input}`);
  };

  if (loading) {
    return <div>Loading...</div>;
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
