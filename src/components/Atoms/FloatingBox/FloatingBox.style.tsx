import styled from "styled-components";

interface FloatingBoxProps {
  width: number;
  height: number;

  padding: number;

  boxShadow: string;

  borderRadius: number;

  backgroundColor: string;

  flexDirection: "row" | "column";
  gap: number;
}

export const FloatingBox = styled.div<FloatingBoxProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  padding: ${({ padding }) => `${padding}px`};

  box-shadow: ${({ boxShadow }) => boxShadow};

  border-radius: ${({ borderRadius }) => `${borderRadius}px`};

  background-color: ${({ backgroundColor }) => backgroundColor};

  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  gap: ${({ gap }) => `${gap}px`};
`;
