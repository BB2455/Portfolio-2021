import styled from "styled-components";
import { device } from "../Devices";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: ${(props) => props.display};
  @media ${device.xlg} {
    max-width: 900px;
  }
  @media ${device.lg} {
    max-width: 700px;
  }
  @media ${device.md} {
    max-width: 475px;
  }
  @media ${device.sm} {
    max-width: 95%;
  }
`;

Container.defaultProps = {
  display: "block",
};
