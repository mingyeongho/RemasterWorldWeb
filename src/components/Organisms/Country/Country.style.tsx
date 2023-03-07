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
`;

export const CountryBodyWrapper = styled.div`
  flex: 1;
`;
