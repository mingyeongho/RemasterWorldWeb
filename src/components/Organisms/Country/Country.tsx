import Link from "next/link";
import { SimpleCountryDTO } from "../../../utils/interface";
import CountryBody from "../../Molecules/CountryBody/CountryBody";
import CountryHead from "../../Molecules/CountryHead/CountryHead";
import * as S from "./Country.style";

interface CountryProps {
  country: SimpleCountryDTO;
}

const Country = ({ country }: CountryProps) => {
  const { code, continent, emoji, languages, name } = country;
  return (
    <S.Country borderColor={continent.code}>
      <Link href={`/${code}`}>
        <CountryHead continent={continent} />
        <S.CountryBodyWrapper>
          <CountryBody emoji={emoji} name={name} languages={languages} />
        </S.CountryBodyWrapper>
      </Link>
    </S.Country>
  );
};

export default Country;
