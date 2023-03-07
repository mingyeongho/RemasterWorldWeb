import { ContinentDTO } from "../../../utils/interface";
import { Palette } from "../../../styles/Palette";
import Span from "../../Atoms/Span/Span";
import * as S from "./CountryHead.style";

interface CountryHeadProps {
  continent: ContinentDTO;
  like?: string;
}

const CountryHead = ({ continent, like = "☆" }: CountryHeadProps) => {
  return (
    <S.CountryHead backgroundColor={continent.code}>
      <Span label={continent.name} color={Palette.White} />
      <Span label={like} color={Palette.White} />
    </S.CountryHead>
  );
};

export default CountryHead;
