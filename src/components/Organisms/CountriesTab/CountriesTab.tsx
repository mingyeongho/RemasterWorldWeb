import Tab from "../../Molecules/Tab/Tab";
import { SimpleCountryDTO } from "../../../utils/interface";
import Countries from "../Countries/Countries";
import * as S from "./CountriesTab.style";

interface CountriesTabProps {
  countries: SimpleCountryDTO[];
}

const CountriesTab = ({ countries }: CountriesTabProps) => {
  return (
    <S.CountriesTab>
      <Tab />
      <S.CountriesWrapper>
        <Countries countries={countries} />
      </S.CountriesWrapper>
    </S.CountriesTab>
  );
};

export default CountriesTab;
