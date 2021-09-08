import * as React from "react";
import NavBar from "../NavBar/NavBar";
import { LandingWrapper } from "./Landing.styled";

const Landing = () => {
  return (
    <LandingWrapper>
      <NavBar />
      <h1>This is a test</h1>
    </LandingWrapper>
  );
};

export default Landing;
