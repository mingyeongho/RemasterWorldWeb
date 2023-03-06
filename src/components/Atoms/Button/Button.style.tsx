import styled from "styled-components";

interface ButtonProps {
  padding: number;
  backgroundColor: string;
  borderRadius: number;
  border: string;
}

export const Button = styled.button<ButtonProps>`
  outline: none;

  padding: ${({ padding }) => `${padding}px`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  border: ${({ border }) => border};

  &:hover {
    cursor: pointer;
  }
`;
