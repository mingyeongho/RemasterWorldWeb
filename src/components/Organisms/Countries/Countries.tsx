import { SimpleCountryDTO } from "@/utils/interface";
import Country from "../Country/Country";
import * as S from "./Countries.style";

interface CountriesProps {
  countries: SimpleCountryDTO[];
}

const Countries = ({ countries }: CountriesProps) => {
  return (
    <S.Countries>
      {countries.map((country, idx) => (
        <Country country={country} key={idx} />
      ))}
    </S.Countries>
  );
};

export default Countries;
