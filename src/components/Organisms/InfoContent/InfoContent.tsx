import InfoRow from "../../Molecules/InfoRow/InfoRow";
import { ContinentDTO, LanguageDTO, StateDTO } from "../../../utils/interface";
import * as S from "./InfoContent.style";

interface InfoContentProps {
  languages: LanguageDTO[];
  phone: string;
  continent: ContinentDTO;
  currency: string;
  states: StateDTO[];
}

const InfoContent = ({
  phone,
  currency,
  states,
  continent,
  languages,
}: InfoContentProps) => {
  return (
    <S.InfoContent>
      <InfoRow name="전화번호" value={phone} />
      <InfoRow name="통화" value={currency} />
      <InfoRow name="주(州)" value={states.map((state) => state.name)} />
      <InfoRow name="대륙" value={continent.name} />
      <InfoRow
        name="언어"
        value={languages.map(
          (language) => `${language.name} ${language.native}`
        )}
      />
    </S.InfoContent>
  );
};

export default InfoContent;
