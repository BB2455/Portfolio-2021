import * as React from "react";
import NavBar from "../NavBar";
import {
  LandingWrapper,
  LandingTitle,
  LandingText,
  IconLink,
} from "./Landing.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useStaticQuery, graphql } from "gatsby";

const Landing = () => {
  let data = useStaticQuery(graphql`
    {
      allDataJson {
        edges {
          node {
            githubUrl
            linkedinUrl
          }
        }
      }
    }
  `);
  return (
    <LandingWrapper>
      <NavBar />
      <LandingTitle>
        Hi, my name is <span style={{ color: "#5CDB95" }}>Blair Burke</span>
      </LandingTitle>
      <LandingTitle>I'm a Web Developer</LandingTitle>
      <div>
        <IconLink
          href={data.allDataJson.edges[0].node.githubUrl}
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} title="Github" />
        </IconLink>
        <IconLink
          href={data.allDataJson.edges[0].node.linkedinUrl}
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} title="Linkedin" />
        </IconLink>
      </div>
      <LandingText>&darr; Scroll Down &darr; </LandingText>
    </LandingWrapper>
  );
};

export default Landing;
