import * as S from "./Heading.style";

interface HeadingProps {
  heading: 1 | 2 | 3 | 4 | 5 | 6;
  label: string;
}

const Heading = ({ heading, label }: HeadingProps) => {
  switch (heading) {
    case 1:
      return <S.H1>{label}</S.H1>;
    case 2:
      return <S.H2>{label}</S.H2>;
    case 3:
      return <S.H3>{label}</S.H3>;
    case 4:
      return <S.H4>{label}</S.H4>;
    case 5:
      return <S.H5>{label}</S.H5>;
    case 6:
      return <S.H6>{label}</S.H6>;
  }
};

export default Heading;
