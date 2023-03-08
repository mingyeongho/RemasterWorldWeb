import { SimpleCountryLikeDTO } from "@/utils/interface";
import Country from "../Country/Country";
import * as S from "./Countries.style";

interface CountriesProps {
  countries: SimpleCountryLikeDTO[];
  onRefetch: () => void;
}

const Countries = ({ countries, onRefetch }: CountriesProps) => {
  return (
    <S.Countries>
      {countries.map((country, idx) => (
        <Country country={country} key={idx} onRefetch={onRefetch} />
      ))}
    </S.Countries>
  );
};

export default Countries;
