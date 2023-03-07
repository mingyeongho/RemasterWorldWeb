import { getContinentColor } from "../../../utils/function";
import { CountryDTO } from "../../../utils/interface";
import InfoAside from "../InfoAside/InfoAside";
import InfoContent from "../InfoContent/InfoContent";
import * as S from "./CountryInfo.style";

interface CountryInfoProps {
  country: CountryDTO;

  borderWitdh?: string;
  borderStyle?: string;
  borderColor?: string;
}

const CountryInfo = ({
  country,
  borderWitdh = "2px",
  borderStyle = "solid",
  borderColor = getContinentColor({ continent: country.continent.code }),
}: CountryInfoProps) => {
  return (
    <S.CountryInfo
      borderWitdh={borderWitdh}
      borderStyle={borderStyle}
      borderColor={borderColor}
    >
      <InfoAside {...country} />
      <InfoContent {...country} />
    </S.CountryInfo>
  );
};

export default CountryInfo;
