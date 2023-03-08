import styled from "styled-components";
import { getContinentColor } from "../../../utils/function";

interface CountryProps {
  borderColor: string;
}

export const Country = styled.div<CountryProps>`
  border: 1px solid
    ${({ borderColor }) => getContinentColor({ continent: borderColor })};
  width: 150px;
  height: 110px;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const CountryBodyWrapper = styled.div`
  flex: 1;
`;
