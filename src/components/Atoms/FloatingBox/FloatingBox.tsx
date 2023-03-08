import { Palette } from "../../../styles/Palette";
import * as S from "./FloatingBox.style";

interface FloatingBoxProps {
  width?: number;
  height?: number;

  padding?: number;

  boxShadow?: string;

  borderRadius?: number;

  backgroundColor?: string;

  flexDirection?: "row" | "column";
  gap?: number;

  children: JSX.Element | JSX.Element[];
}

const FloatingBox = ({
  width = 720,
  height = 600,
  padding = 10,
  boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  borderRadius = 10,
  backgroundColor = Palette.White,
  flexDirection = "column",
  gap = 10,
  children,
}: FloatingBoxProps) => {
  return (
    <S.FloatingBox
      width={width}
      height={height}
      padding={padding}
      boxShadow={boxShadow}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      flexDirection={flexDirection}
      gap={gap}
    >
      {children}
    </S.FloatingBox>
  );
};

export default FloatingBox;
