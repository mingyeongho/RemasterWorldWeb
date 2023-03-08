import React from "react";
import { Palette } from "../../../styles/Palette";
import * as S from "./Span.style";

interface SpanProps {
  label: string;
  onClick?: (e: React.MouseEvent) => void;

  whiteSpace?: "nowrap" | "wrap";
  fontSize?: string;
  color?: string;
}

const Span = ({
  label,
  onClick,
  whiteSpace = "nowrap",
  fontSize = "1rem",
  color = Palette.Black,
}: SpanProps) => {
  return (
    <S.Span
      whiteSpace={whiteSpace}
      fontSize={fontSize}
      color={color}
      onClick={onClick}
    >
      {label}
    </S.Span>
  );
};

export default Span;
