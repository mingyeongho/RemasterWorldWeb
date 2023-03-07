import InfoRow from "../../Molecules/InfoRow/InfoRow";
import Span from "../../Atoms/Span/Span";
import * as S from "./InfoAside.style";
import { Palette } from "../../../styles/Palette";

interface InfoAsideProps {
  code: string;
  name: string;
  native: string;
  emoji: string;
  capital: string;
}

const InfoAside = ({ code, name, native, emoji, capital }: InfoAsideProps) => {
  return (
    <S.InfoAside>
      <Span label={emoji} fontSize="4rem" />
      <Span label={native} fontSize="1.1rem" />
      <Span label={name} fontSize="0.85rem" color="#777" />
      <InfoRow name="국가코드" value={code} />
      <InfoRow name="수도" value={capital} />
    </S.InfoAside>
  );
};

export default InfoAside;
