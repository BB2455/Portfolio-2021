import styled from "styled-components";
import theme from "../../themes/theme";
import { device } from "../Devices";
import { P } from "../shared";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 3rem 0 2rem 0;
  @media ${device.xsm} {
    flex-direction: column;
    padding-top: 1rem;
  }
`;

export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  @media ${device.sm} {
    font-size: 1.5rem;
  }
  @media ${device.xsm} {
    margin: 0.5rem 0;
  }
`;

export const ContactLink = styled.a`
  text-decoration: none;
  margin-top: 1rem;
  color: ${theme.mainColor};
  font-size: 1.25rem;
  &:hover {
    color: #5cdb95;
  }
  @media ${device.sm} {
    font-size: 1rem;
  }
`;

export const ContactText = styled(P)`
  @media ${device.sm} {
    text-align: center;
  }
`;
