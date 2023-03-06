import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import HomeTemplate from "../components/Templates/HomeTemplate/HomeTemplate";

export default function IndexPage() {
  const router = useRouter();
  const [input, setInput] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/${input}`);
  };

  return <HomeTemplate value={input} onChange={onChange} onSearch={onSearch} />;
}
