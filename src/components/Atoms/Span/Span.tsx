import { Palette } from "../../../styles/Palette";
import * as S from "./Span.style";

interface SpanProps {
  label: string;

  whiteSpace?: "nowrap" | "wrap";
  fontSize?: string;
  color?: string;
}

const Span = ({
  label,
  whiteSpace = "nowrap",
  fontSize = "1rem",
  color = Palette.Black,
}: SpanProps) => {
  return (
    <S.Span whiteSpace={whiteSpace} fontSize={fontSize} color={color}>
      {label}
    </S.Span>
  );
};

export default Span;
