import Span from "../../Atoms/Span/Span";
import * as S from "./InfoRow.style";

interface InfoRowProps {
  name: string;
  value: string | string[];
}

const InfoRow = ({ name, value }: InfoRowProps) => {
  return (
    <S.InfoRow>
      <S.KeyWrapper>
        <Span label={name} color="#777" fontSize="0.875rem" />
      </S.KeyWrapper>
      <S.ValueWrapper>
        {typeof value === "string" ? (
          <Span label={value} whiteSpace="wrap" />
        ) : (
          value.map((item, idx) => (
            <Span key={idx} label={item} whiteSpace="wrap" />
          ))
        )}
      </S.ValueWrapper>
    </S.InfoRow>
  );
};

export default InfoRow;
