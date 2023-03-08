import { ContinentDTO } from "../../../utils/interface";
import { Palette } from "../../../styles/Palette";
import Span from "../../Atoms/Span/Span";
import * as S from "./CountryHead.style";
import { onToggleLikeCountries } from "../../../utils/function";

interface CountryHeadProps {
  code: string;
  continent: ContinentDTO;
  isLike: boolean;
}

const CountryHead = ({ code, continent, isLike }: CountryHeadProps) => {
  return (
    <S.CountryHead backgroundColor={continent.code}>
      <Span label={continent.name} color={Palette.White} />
      <Span
        label={isLike ? "★" : "☆"}
        color={Palette.White}
        onClick={(e: React.MouseEvent) =>
          onToggleLikeCountries(e, code, isLike)
        }
      />
    </S.CountryHead>
  );
};

export default CountryHead;
