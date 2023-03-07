import CountriesTab from "../../Organisms/CountriesTab/CountriesTab";
import { ChangeEvent, FormEvent } from "react";
import Form from "../../Molecules/Form/Form";
import * as S from "./HomeTemplate.style";
import { SimpleCountryDTO } from "../../../utils/interface";

interface HomeTemplateProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: FormEvent) => void;
  qs: string | string[] | undefined;

  countries: SimpleCountryDTO[];
}

const HomeTemplate = ({
  value,
  onChange,
  onSearch,
  qs,
  countries,
}: HomeTemplateProps) => {
  return (
    <S.HomeTemplate>
      <Form value={value} onChange={onChange} onSearch={onSearch} />
      <CountriesTab countries={countries} qs={qs} />
    </S.HomeTemplate>
  );
};

export default HomeTemplate;
