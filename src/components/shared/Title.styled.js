import styled from "styled-components";
import { device } from "../Devices";

export const Title = styled.h1`
  font-size: 2.5rem;
  padding: ${(props) => props.padding};
  @media ${device.xlg} {
    font-size: 2rem;
  }
  @media ${device.md} {
    font-size: 1.5rem;
  }
  @media ${device.sm} {
    text-align: center;
  }
`;

Title.defaultProps = {
  padding: "2rem 0",
};
