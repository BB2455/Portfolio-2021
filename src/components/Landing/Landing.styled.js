import styled, { keyframes } from "styled-components";
// import { device } from "../Devices";
import theme from "../../themes/theme";

export const LandingWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const LandingTitle = styled.h1`
  font-size: 2.65rem;
  color: ${(props) => props.color};
  margin-bottom: 0.5rem;
`;

const scrollAnimation = keyframes`
  0% {bottom: 8%}
  40%, 100% {bottom: 10%}
`;

export const LandingText = styled.h2`
  position: absolute;
  bottom: 10%;
  font-size: 1.5rem;
  font-weight: 400;
  animation: ${scrollAnimation} 2s ease-out infinite;
`;

LandingTitle.defaultProps = {
  color: "inherit",
};

export const IconLink = styled.a`
  text-decoration: none;
  margin-right: 2rem;
  color: ${theme.mainColor};
  &:hover {
    color: #5cdb95;
  }
`;
