import * as S from "./Span.style";

interface SpanProps {
  label: string;

  fontSize?: string;
  color?: string;
}

const Span = ({ label, fontSize = "1rem", color = "black" }: SpanProps) => {
  return (
    <S.Span fontSize={fontSize} color={color}>
      {label}
    </S.Span>
  );
};

export default Span;
