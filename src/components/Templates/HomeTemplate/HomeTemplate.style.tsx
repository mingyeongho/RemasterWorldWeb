import { Palette } from "../../../styles/Palette";
import styled from "styled-components";

export const HomeTemplate = styled.main`
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
