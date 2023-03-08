import Link from "next/link";
import { SimpleCountryDTO } from "../../../utils/interface";
import CountryBody from "../../Molecules/CountryBody/CountryBody";
import CountryHead from "../../Molecules/CountryHead/CountryHead";
import * as S from "./Country.style";

interface CountryProps {
  country: SimpleCountryDTO;
}

const Country = ({ country }: CountryProps) => {
  const { code, continent } = country;
  return (
    <S.Country borderColor={continent.code}>
      <Link href={`/${code}`}>
        <CountryHead {...country} />
        <S.CountryBodyWrapper>
          <CountryBody {...country} />
        </S.CountryBodyWrapper>
      </Link>
    </S.Country>
  );
};

export default Country;
