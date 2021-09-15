import styled from "styled-components";
import theme from "../../themes/theme";
import { Title } from "../shared";
import { device } from "../Devices";

export const FooterWrapper = styled.div`
  width: 100%;
  background: #000;
  @media ${device.sm} {
    text-align: center;
  }
`;

export const IconLink = styled.a`
  text-decoration: none;
  padding-left: 2rem;
  color: ${theme.mainColor};
  font-size: 1.5rem;
  &:hover {
    color: #5cdb95;
  }
  @media ${device.md} {
    font-size: 1.25rem;
    padding-left: 1.5rem;
  }
  @media ${device.sm} {
    padding: 0 1rem;
    font-size: 1rem;
  }
`;

export const FooterTitle = styled(Title)`
  font-size: 1.5rem;
  @media ${device.sm} {
    font-size: 1.25rem;
  }
  @media ${device.xsm} {
    font-size: 1rem;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.sm} {
    flex-direction: column;
    padding-bottom: 2rem;
  }
`;
