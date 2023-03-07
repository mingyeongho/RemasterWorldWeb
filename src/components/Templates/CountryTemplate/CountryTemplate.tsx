import CountryInfo from "../../Organisms/CountryInfo/CountryInfo";
import Form from "../../Molecules/Form/Form";
import * as S from "./CountryTemplate.style";
import { ChangeEvent, FormEvent } from "react";
import { CountryDTO } from "../../../utils/interface";

interface CountryTemplateProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: FormEvent) => void;

  countryInfo: CountryDTO;
}

const CountryTemplate = ({
  value,
  onChange,
  onSearch,

  countryInfo,
}: CountryTemplateProps) => {
  return (
    <S.CountryTemplate>
      <Form value={value} onChange={onChange} onSearch={onSearch} />
      <S.InfoWrapper>
        <CountryInfo country={countryInfo} />
      </S.InfoWrapper>
    </S.CountryTemplate>
  );
};

export default CountryTemplate;
