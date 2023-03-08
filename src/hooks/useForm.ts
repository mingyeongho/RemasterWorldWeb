import { useRouter } from "next/router";
import { useState, ChangeEvent, FormEvent } from "react";

const useForm = () => {
  const router = useRouter();
  const [input, setInput] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/${input.toUpperCase()}`);
  };

  return { input, onChange, onSearch };
};

export default useForm;
