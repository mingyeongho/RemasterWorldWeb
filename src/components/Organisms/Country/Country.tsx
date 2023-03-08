import Link from "next/link";
import { SimpleCountryLikeDTO } from "../../../utils/interface";
import CountryBody from "../../Molecules/CountryBody/CountryBody";
import CountryHead from "../../Molecules/CountryHead/CountryHead";
import * as S from "./Country.style";

interface CountryProps {
  country: SimpleCountryLikeDTO;
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
