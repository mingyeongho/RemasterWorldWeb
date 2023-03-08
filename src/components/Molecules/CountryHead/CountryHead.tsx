import { ContinentDTO } from "../../../utils/interface";
import { Palette } from "../../../styles/Palette";
import Span from "../../Atoms/Span/Span";
import * as S from "./CountryHead.style";
import { onToggleLikeCountries } from "../../../utils/function";
import Button from "../../Atoms/Button/Button";

interface CountryHeadProps {
  // CountryHead의 색으로 Continent를 유추할 수 있다
  continent: ContinentDTO;

  // like 기능을 위한 isLike, code 필드
  // isLike로 localStorage에 추가할 지 제거할 지 결정
  // code필드로 추가하고 제거할 국가 결정
  isLike: boolean;
  code: string;

  //
  onRefetch: () => void;
}

const CountryHead = ({
  code,
  continent,
  isLike,
  onRefetch,
}: CountryHeadProps) => {
  return (
    <S.CountryHead backgroundColor={continent.code}>
      <Span label={continent.name} color={Palette.White} />
      <Button
        type="button"
        label={isLike ? "★" : "☆"}
        backgroundColor="inherit"
        border="none"
        padding={0}
        color={Palette.White}
        onClick={(e: React.MouseEvent) => {
          onToggleLikeCountries(e, code, isLike);
          onRefetch();
        }}
      />
    </S.CountryHead>
  );
};

export default CountryHead;
