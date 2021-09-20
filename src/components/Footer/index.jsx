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
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  let data = useStaticQuery(graphql`
    {
      allDataJson {
        edges {
          node {
            phone
            email
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
              <IconLink href="https://github.com/BB2455" target="_blank">
                <FontAwesomeIcon icon={faGithub} title="Github" />
              </IconLink>
            </IconContainer>
            <IconContainer>
              <IconLink
                href="https://www.linkedin.com/in/blair-burke-8b285a203/"
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
            <IconContainer>
              <IconLink href={`tel:${data.allDataJson.edges[0].node.phone}`}>
                <FontAwesomeIcon icon={faPhone} title="Give Me A Call" />
              </IconLink>
            </IconContainer>
          </SocialContainer>
        </FooterContainer>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
