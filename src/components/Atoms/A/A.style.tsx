import styled from "styled-components";

interface AProps {
  textDecoration: string;
  color: string;
}

export const A = styled.div<AProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: ${({ textDecoration }) => textDecoration};
    color: ${({ color }) => color};
  }
`;
