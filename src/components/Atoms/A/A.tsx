import Link from "next/link";
import * as S from "./A.style";

interface LinkWrapperProps {
  href: string;
  label: string;

  textDecoration?: string;
  color?: string;
}

const A = ({
  href,
  label,
  textDecoration = "none",
  color = "inherit",
}: LinkWrapperProps) => {
  return (
    <S.A textDecoration={textDecoration} color={color}>
      <Link href={href}>{label}</Link>
    </S.A>
  );
};

export default A;
