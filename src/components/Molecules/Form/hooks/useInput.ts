import { ChangeEvent, useState } from "react";

interface Props {
  initialValue: string;
}

const useInput = ({ initialValue }: Props) => {
  const [input, setInput] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return { input, onChange };
};

export default useInput;
