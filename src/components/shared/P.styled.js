import styled from "styled-components";

export const P = styled.p`
  color: ${(props) => props.color};
  font-size: 1rem;
  font-weight: 400;
  margin: ${(props) => props.margin};
`;

P.defaultProps = {
  margin: 0,
  color: "inherit",
};
