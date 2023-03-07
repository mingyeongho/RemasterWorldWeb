import styled from "styled-components";

interface CountryInfoProps {
  borderWitdh: string;
  borderStyle: string;
  borderColor: string;
}

export const CountryInfo = styled.div<CountryInfoProps>`
  display: flex;
  gap: 10px;

  border: ${({ borderWitdh, borderStyle, borderColor }) =>
    `${borderWitdh} ${borderStyle} ${borderColor}`};
  border-radius: 10px;
  height: 100%;
  overflow: scroll;
`;
