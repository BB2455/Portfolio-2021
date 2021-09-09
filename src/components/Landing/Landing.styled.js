import styled, { keyframes } from "styled-components";
// import { device } from "../Devices";

export const LandingWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const LandingTitle = styled.h1`
  font-size: 2.65rem
  color: ${(props) => props.color}
  
`;

export const LandingText = styled.h2`
  position: absolute;
  bottom: 10%;
  font-size: 1.5rem;
  font-weight: 400;
`;

LandingTitle.defaultProps = {
  color: "inherit",
};
