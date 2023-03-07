import styled from "styled-components";

interface AProps {
  textDecoration: string;
  color: string;
}

export const A = styled.div<AProps>`
  a {
    text-decoration: ${({ textDecoration }) => textDecoration};
    color: ${({ color }) => color};
  }
`;
