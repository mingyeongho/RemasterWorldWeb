import styled from "styled-components";

interface CountryHeadProps {
  backgroundColor: string;
}

export const CountryHead = styled.div<CountryHeadProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;
