import { ChangeEvent, FormEvent } from "react";
import Button from "../../Atoms/Button/Button";
import Input from "../../Atoms/Input/Input";
import * as S from "./Form.style";

interface FormProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: FormEvent) => void;
}

const Form = ({ value, onChange, onSearch }: FormProps) => {
  return (
    <S.Form onSubmit={onSearch}>
      <S.InputWrapper>
        <Input
          value={value}
          onChange={onChange}
          placeholder="국가코드 (KR, US, ...)"
          backgroundColor="inherit"
          border="none"
          letterSpacing={1}
          paddings={[4, 4, 4, 4]}
        />
      </S.InputWrapper>
      <Button type="submit" label="검색" border="none" />
    </S.Form>
  );
};

export default Form;
