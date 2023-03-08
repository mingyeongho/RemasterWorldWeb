import Span from "../../Atoms/Span/Span";
import Link from "next/link";
import { SimpleCountryLikeDTO } from "../../../utils/interface";
import CountryBody from "../../Molecules/CountryBody/CountryBody";
import CountryHead from "../../Molecules/CountryHead/CountryHead";
import * as S from "./Country.style";

interface CountryProps {
  country: SimpleCountryLikeDTO;
  onRefetch: () => void;
}

const Country = ({ country, onRefetch }: CountryProps) => {
  const { code, continent } = country;
  return (
    <S.Country borderColor={continent.code}>
      <Link href={`/${code}`}>
        <CountryHead {...country} onRefetch={onRefetch} />
        <S.CountryBodyWrapper>
          <CountryBody {...country} />
        </S.CountryBodyWrapper>
      </Link>
    </S.Country>
  );
};

export default Country;
