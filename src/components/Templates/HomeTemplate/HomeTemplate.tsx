import CountriesTab from "../../Organisms/CountriesTab/CountriesTab";
import { ChangeEvent, FormEvent } from "react";
import Form from "../../Molecules/Form/Form";
import * as S from "./HomeTemplate.style";
import { SimpleCountryLikeDTO } from "../../../utils/interface";
import FloatingBox from "../../Atoms/FloatingBox/FloatingBox";

interface HomeTemplateProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: FormEvent) => void;
  qs: string | string[] | undefined;

  countries: SimpleCountryLikeDTO[];
  onRefetch: () => void;
}

const HomeTemplate = ({
  value,
  onChange,
  onSearch,
  qs,
  countries,
  onRefetch,
}: HomeTemplateProps) => {
  return (
    <FloatingBox>
      <Form value={value} onChange={onChange} onSearch={onSearch} />
      <CountriesTab countries={countries} qs={qs} onRefetch={onRefetch} />
    </FloatingBox>
  );
};

export default HomeTemplate;
