import { ContinentDTO } from "../../../utils/interface";
import { Palette } from "../../../styles/Palette";
import Span from "../../Atoms/Span/Span";
import * as S from "./CountryHead.style";

interface CountryHeadProps {
  continent: ContinentDTO;
  like?: string;

  backgroundColor?: string;
}

const CountryHead = ({
  continent,
  like = "☆",
  backgroundColor = Palette.Accent,
}: CountryHeadProps) => {
  return (
    <S.CountryHead backgroundColor={backgroundColor}>
      <Span label={continent.name} />
      <Span label={like} />
    </S.CountryHead>
  );
};

export default CountryHead;
