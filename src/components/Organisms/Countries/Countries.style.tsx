import styled from "styled-components";

export const Countries = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  overflow: scroll;
`;
