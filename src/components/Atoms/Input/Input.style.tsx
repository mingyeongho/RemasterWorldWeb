import styled from "styled-components";

interface InputProps {
  backgroundColor: string;
  border: string;
  letterSpacing: number;
  paddings: [number, number, number, number];
}

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 100%;
  outline: none;

  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border};
  letter-spacing: ${({ letterSpacing }) => `${letterSpacing}px`};
  padding: ${({ paddings }) => paddings.map((padding) => `${padding}px `)};
`;
