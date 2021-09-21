import styled, { keyframes } from "styled-components";
import { device } from "../Devices";
import theme from "../../themes/theme";

export const LandingWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  @media ${device.sm} {
    text-align: center;
  }
`;

export const LandingTitle = styled.h1`
  font-size: 2.875;
  color: ${(props) => props.color};
  margin-bottom: 0.5rem;
  @media ${device.xlg} {
    font-size: 2.625rem;
  }
  @media ${device.md} {
    font-size: 2rem;
  }
  @media ${device.sm} {
    font-size: 1.75rem;
  }
  @media ${device.xsm} {
    font-size: 1.5rem;
  }
`;

const scrollAnimation = keyframes`
  0% {bottom: 8%}
  40%, 100% {bottom: 10%}
`;

export const LandingText = styled.h2`
  position: absolute;
  bottom: 10%;
  font-size: 1.75rem;
  font-weight: 400;
  animation: ${scrollAnimation} 2s ease-out infinite;
  @media ${device.xlg} {
    font-size: 1.5rem;
  }
  @media ${device.md} {
    font-size: 1.25rem;
  }
  @media ${device.sm} {
    font-size: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

LandingTitle.defaultProps = {
  color: "inherit",
};

export const IconLink = styled.a`
  text-decoration: none;
  margin-right: 2rem;
  color: ${theme.mainColor};
  font-size: 2rem;
  &:hover {
    color: #5cdb95;
  }
  @media ${device.sm} {
    margin: 0 1rem;
    font-size: 1.5rem;
  }
`;
