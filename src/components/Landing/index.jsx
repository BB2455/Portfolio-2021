import * as React from "react";
import NavBar from "../NavBar";
import {
  LandingWrapper,
  LandingTitle,
  LandingText,
  IconLink,
} from "./Landing.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Landing = () => {
  return (
    <LandingWrapper>
      <NavBar />
      <LandingTitle>
        Hi, my name is <span style={{ color: "#5CDB95" }}>Blair Burke</span>
      </LandingTitle>
      <LandingTitle>I'm a Web Developer</LandingTitle>
      <div>
        <IconLink href="https://github.com/BB2455" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/blair-burke-8b285a203/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </IconLink>
        <IconLink href="https://twitter.com/BlairCodes" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </IconLink>
      </div>
      <LandingText>Scroll Down</LandingText>
    </LandingWrapper>
  );
};

export default Landing;
