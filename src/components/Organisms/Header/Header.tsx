import Link from "next/link";
import Heading from "../../Atoms/Heading/Heading";
import * as S from "./Header.style";

const Header = () => {
  return (
    <S.Header>
      <Link href="/">
        <Heading heading={1} label="WorldWeb" />
      </Link>
    </S.Header>
  );
};

export default Header;
