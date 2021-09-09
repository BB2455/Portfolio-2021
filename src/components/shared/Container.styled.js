import styled from "styled-components";
import { device } from "../Devices";

export const Container = styled.div`
  max-width: 95%;
  margin: 0 auto;
  @media ${device.sm} {
    max-width: 475px;
    maargin: 0;
  }
  @media ${device.md} {
    max-width: 700px;
  }
  @media ${device.lg} {
    max-width: 900px;
  }
  @media ${device.xlg} {
    max-width: 1200px;
  }
`;
