import { LanguageDTO } from "../../../utils/interface";
import Span from "../../Atoms/Span/Span";
import * as S from "./CountryBody.style";

interface CountryBodyProps {
  emoji: string;
  name: string;
  languages: LanguageDTO[];
}

const CountryBody = ({ emoji, name, languages }: CountryBodyProps) => {
  return (
    <S.CountryBody>
      <Span label={emoji} fontSize="3rem" />
      <S.NameWrapper>
        <Span label={name} />
        <S.LanguageWrapper>
          {languages.map((language) => (
            <Span
              key={language.code}
              label={language.name}
              fontSize="0.85rem"
            />
          ))}
        </S.LanguageWrapper>
      </S.NameWrapper>
    </S.CountryBody>
  );
};

export default CountryBody;
