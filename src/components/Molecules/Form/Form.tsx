import Button from "../../Atoms/Button/Button";
import Input from "../../Atoms/Input/Input";
import * as S from "./Form.style";
import useForm from "./hooks/useForm";
import useInput from "./hooks/useInput";

const Form = () => {
  const { input, onChange, onSearch } = useForm({ initialValue: "" });

  return (
    <S.Form onSubmit={onSearch}>
      <Input
        placeholder="국가코드 (KR, US, ...)"
        value={input}
        onChange={onChange}
      />
      <Button type="submit" label="검색" />
    </S.Form>
  );
};

export default Form;
