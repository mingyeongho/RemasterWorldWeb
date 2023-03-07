import styled from "styled-components";

interface SpanProps {
  fontSize: string;
  color: string;
}

export const Span = styled.span<SpanProps>`
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
`;
