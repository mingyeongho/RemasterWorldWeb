import { ChangeEvent } from "react";
import * as S from "./Input.style";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <S.Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></S.Input>
  );
};

export default Input;
