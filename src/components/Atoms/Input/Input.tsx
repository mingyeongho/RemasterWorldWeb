import { ChangeEvent } from "react";
import * as S from "./Input.style";

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;

  backgroundColor?: string;
  border?: string;
  letterSpacing?: number;
  paddings?: [number, number, number, number];
}

const Input = ({
  placeholder,
  value,
  onChange,
  backgroundColor = "white",
  border = "1px solid #ddd",
  letterSpacing = 0,
  paddings = [0, 0, 0, 0],
}: InputProps) => {
  return (
    <S.Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      backgroundColor={backgroundColor}
      border={border}
      letterSpacing={letterSpacing}
      paddings={paddings}
    ></S.Input>
  );
};

export default Input;
