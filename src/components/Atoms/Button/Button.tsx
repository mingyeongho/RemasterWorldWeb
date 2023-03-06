import { Palette } from "../../../styles/Palette";
import * as S from "./Button.style";

interface ButtonProps {
  type: "submit" | "button" | "reset";
  label: string;
  onClick?: (e: React.MouseEvent) => void;

  padding?: number;
  backgroundColor?: string;
  borderRadius?: number;
  border?: string;
}

const Button = ({
  type = "button",
  label,
  onClick,

  padding = 6,
  backgroundColor = Palette.Accent_Dark,
  borderRadius = 10,
  border = "1px solid #ddd",
}: ButtonProps) => {
  return (
    <S.Button
      type={type}
      onClick={onClick}
      padding={padding}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      border={border}
    >
      {label}
    </S.Button>
  );
};

export default Button;
