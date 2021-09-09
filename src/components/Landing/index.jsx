import * as React from "react";
import NavBar from "../NavBar";
import { LandingWrapper, LandingTitle, LandingText } from "./Landing.styled";

const Landing = () => {
  return (
    <LandingWrapper>
      <NavBar />
      <LandingTitle>
        Hi, my name is <span style={{ color: "#5CDB95" }}>Blair Burke</span>
      </LandingTitle>
      <LandingTitle>I'm a Web Developer</LandingTitle>
      <LandingText>Scroll Down</LandingText>
    </LandingWrapper>
  );
};

export default Landing;
