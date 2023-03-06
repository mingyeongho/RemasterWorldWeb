import { ChangeEvent, FormEvent } from "react";
import Form from "../../Molecules/Form/Form";
import * as S from "./HomeTemplate.style";

interface HomeTemplateProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: FormEvent) => void;
}

const HomeTemplate = ({ value, onChange, onSearch }: HomeTemplateProps) => {
  return (
    <S.HomeTemplate>
      <Form value={value} onChange={onChange} onSearch={onSearch} />
    </S.HomeTemplate>
  );
};

export default HomeTemplate;
