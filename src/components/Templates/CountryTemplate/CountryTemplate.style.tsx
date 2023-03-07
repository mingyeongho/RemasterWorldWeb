import styled from "styled-components";
import { Palette } from "../../../styles/Palette";

export const CountryTemplate = styled.main`
  width: 720px;
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${Palette.White};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px;
`;

export const InfoWrapper = styled.div`
  flex: 1;
  height: 92%;
`;
