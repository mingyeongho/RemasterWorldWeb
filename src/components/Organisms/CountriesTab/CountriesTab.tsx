import Tab from "../../Molecules/Tab/Tab";
import { SimpleCountryDTO } from "../../../utils/interface";
import Countries from "../Countries/Countries";
import * as S from "./CountriesTab.style";

interface CountriesTabProps {
  countries: SimpleCountryDTO[];
  qs: string | string[] | undefined;
}

const CountriesTab = ({ countries, qs }: CountriesTabProps) => {
  return (
    <S.CountriesTab>
      <Tab qs={qs} />
      <S.CountriesWrapper>
        <Countries countries={countries} />
      </S.CountriesWrapper>
    </S.CountriesTab>
  );
};

export default CountriesTab;
