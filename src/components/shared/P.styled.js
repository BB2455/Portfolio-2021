import styled from "styled-components";
import { device } from "../Devices";

export const P = styled.p`
  color: ${(props) => props.color};
  font-size: 1.25rem;
  font-weight: 400;
  margin: ${(props) => props.margin};

  @media ${device.xlg} {
    font-size: 1rem;
  }
  @media ${device.md} {
    font-size: 0.75rem;
  }
`;

P.defaultProps = {
  margin: 0,
  color: "inherit",
};
