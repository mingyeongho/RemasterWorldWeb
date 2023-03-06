import { Palette } from "../../../styles/Palette";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Palette.Accent};
  padding: 6px 10px;
  border-radius: 10px;
`;

export const InputWrapper = styled.div`
  flex: 1;
`;
