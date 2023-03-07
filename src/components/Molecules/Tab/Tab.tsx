import { TabMenus } from "../../../utils/constant";
import * as S from "./Tab.style";
import A from "../../Atoms/A/A";
import {
  getLinkHref,
  getTabBgColor,
  isFocusTabMenu,
} from "../../../utils/function";
import { Palette } from "../../../styles/Palette";

interface TabProps {
  qs: string | string[] | undefined;

  borderWidth?: string;
  borderStyle?: string;
  borderRadius?: string;
}

const Tab = ({
  qs,
  borderWidth = "1px",
  borderStyle = "solid",
  borderRadius = "10px",
}: TabProps) => {
  return (
    <S.Tab
      borderWidth={borderWidth}
      borderStyle={borderStyle}
      borderColor={getTabBgColor({ continent: qs })}
      borderRadius={borderRadius}
    >
      {TabMenus.map((menu, idx) => (
        <S.LinkContainer
          key={idx}
          isFocus={isFocusTabMenu({ qs, label: menu.label })}
          backgroundColor={getTabBgColor({ continent: qs })}
        >
          <A href={getLinkHref({ label: menu.label })} label={menu.label} />
        </S.LinkContainer>
      ))}
    </S.Tab>
  );
};

export default Tab;
