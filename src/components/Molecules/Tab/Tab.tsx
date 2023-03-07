import Span from "../../Atoms/Span/Span";
import { TabMenus } from "../../../utils/constant";
import * as S from "./Tab.style";

const Tab = () => {
  return (
    <S.Tab>
      {TabMenus.map((menu, idx) => (
        <Span label={menu.label} key={idx} />
      ))}
    </S.Tab>
  );
};

export default Tab;
