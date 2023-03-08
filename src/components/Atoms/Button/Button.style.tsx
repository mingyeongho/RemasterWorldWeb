import styled from "styled-components";

interface ButtonProps {
  padding: number;
  backgroundColor: string;
  color: string;
  borderRadius: number;
  border: string;
}

export const Button = styled.button<ButtonProps>`
  outline: none;

  padding: ${({ padding }) => `${padding}px`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  border: ${({ border }) => border};

  &:hover {
    cursor: pointer;
  }
`;
