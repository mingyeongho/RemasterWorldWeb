import { SimpleCountryDTO } from "../../../utils/interface";
import CountryBody from "../../Molecules/CountryBody/CountryBody";
import CountryHead from "../../Molecules/CountryHead/CountryHead";
import * as S from "./Country.style";

interface CountryProps {
  country: SimpleCountryDTO;
}

const Country = ({ country }: CountryProps) => {
  const { continent, emoji, languages, name } = country;
  return (
    <S.Country>
      <CountryHead continent={continent} />
      <S.CountryBodyWrapper>
        <CountryBody emoji={emoji} name={name} languages={languages} />
      </S.CountryBodyWrapper>
    </S.Country>
  );
};

export default Country;
