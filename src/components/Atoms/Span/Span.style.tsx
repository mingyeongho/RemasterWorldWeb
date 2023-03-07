import styled from "styled-components";

interface SpanProps {
  whiteSpace: "nowrap" | "wrap";
  fontSize: string;
  color: string;
}

export const Span = styled.span<SpanProps>`
  text-overflow: ellipsis;

  white-space: ${({ whiteSpace }) => whiteSpace};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
`;
