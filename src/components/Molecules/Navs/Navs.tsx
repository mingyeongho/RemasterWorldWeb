import Link from "next/link";
import * as S from "./Navs.style";

const NavContents = [
  {
    label: "AS",
  },
  {
    label: "EU",
  },
  {
    label: "NA",
  },
  {
    label: "SA",
  },
  {
    label: "AF",
  },
  {
    label: "AN",
  },
  {
    label: "OC",
  },
  {
    label: "Like",
  },
];

const Navs = () => {
  return (
    <S.Navs>
      {NavContents.map((content, idx) => (
        <Link key={idx} href={`/?continent=${content.label}`}>
          {content.label}
        </Link>
      ))}
    </S.Navs>
  );
};

export default Navs;
