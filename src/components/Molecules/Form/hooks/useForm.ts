import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  initialValue: string;
}

const useForm = ({ initialValue }: Props) => {
  const router = useRouter();
  const [input, setInput] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/${input}`);
    setInput("");
  };

  return { input, onChange, onSearch };
};

export default useForm;
