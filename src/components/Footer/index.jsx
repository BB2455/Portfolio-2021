import * as React from "react";
import { Container } from "../shared";
import {
  FooterWrapper,
  IconLink,
  FooterContainer,
  FooterTitle,
  IconContainer,
  SocialContainer,
} from "./Footer.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  let data = useStaticQuery(graphql`
    {
      allDataJson {
        edges {
          node {
            email
            githubUrl
            linkedinUrl
          }
        }
      }
    }
  `);
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <FooterTitle>Blair Burke 2021</FooterTitle>
          <SocialContainer>
            <IconContainer>
              <IconLink
                href={data.allDataJson.edges[0].node.githubUrl}
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} title="Github" />
              </IconLink>
            </IconContainer>
            <IconContainer>
              <IconLink
                href={data.allDataJson.edges[0].node.linkedinUrl}
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} title="Linkedin" />
              </IconLink>
            </IconContainer>
            <IconContainer>
              <IconLink href={`mailto:${data.allDataJson.edges[0].node.email}`}>
                <FontAwesomeIcon icon={faEnvelope} title="Email Me" />
              </IconLink>
            </IconContainer>
          </SocialContainer>
        </FooterContainer>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
