import Tab from "../../Molecules/Tab/Tab";
import { SimpleCountryLikeDTO } from "../../../utils/interface";
import Countries from "../Countries/Countries";
import * as S from "./CountriesTab.style";

interface CountriesTabProps {
  countries: SimpleCountryLikeDTO[];
  qs: string | string[] | undefined;
  onRefetch: () => void;
}

const CountriesTab = ({ countries, qs, onRefetch }: CountriesTabProps) => {
  return (
    <S.CountriesTab>
      <Tab qs={qs} />
      <S.CountriesWrapper>
        <Countries countries={countries} onRefetch={onRefetch} />
      </S.CountriesWrapper>
    </S.CountriesTab>
  );
};

export default CountriesTab;
