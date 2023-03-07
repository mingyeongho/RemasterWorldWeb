import { Palette } from "../../../styles/Palette";
import styled from "styled-components";

interface CountryProps {}

export const Country = styled.div<CountryProps>`
  border: 1px solid ${Palette.Accent};
  width: 150px;
  height: 110px;
  display: flex;
  flex-direction: column;
`;

export const CountryBodyWrapper = styled.div`
  flex: 1;
`;
