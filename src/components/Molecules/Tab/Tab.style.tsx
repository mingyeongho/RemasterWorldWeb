import { Palette } from "../../../styles/Palette";
import styled from "styled-components";

interface TabProps {
  borderWidth: string;
  borderStyle: string;
  borderColor: string;
  borderRadius: string;
}

interface LinkContainerProps {
  isFocus: boolean;
  backgroundColor: string;
}

export const Tab = styled.div<TabProps>`
  display: flex;
  justify-content: space-around;

  border: ${({ borderWidth, borderStyle, borderColor }) =>
    `${borderWidth} ${borderStyle} ${borderColor}`};
  border-radius: ${({ borderRadius }) => borderRadius};
  overflow: hidden;
`;

export const LinkContainer = styled.div<LinkContainerProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;

  background-color: ${({ isFocus, backgroundColor }) =>
    isFocus && backgroundColor};
  color: ${({ isFocus }) => (isFocus ? Palette.White : Palette.Black)};
`;
