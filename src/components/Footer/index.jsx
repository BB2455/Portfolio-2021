import * as React from "react";
import { Container } from "../shared";
import {
  FooterWrapper,
  IconLink,
  FooterContainer,
  FooterTitle,
} from "./Footer.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import { data } from "../../data/data";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <FooterTitle>&copy; 2021 Blair Burke</FooterTitle>
          <div>
            <IconLink href="https://github.com/BB2455" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </IconLink>
            <IconLink
              href="https://www.linkedin.com/in/blair-burke-8b285a203/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </IconLink>
            <IconLink href="https://twitter.com/BlairCodes" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </IconLink>
            <IconLink href={`mailto:email@email.com`}>
              <FontAwesomeIcon icon={faEnvelope} />
            </IconLink>
            <IconLink href={`tel:1123123124`}>
              <FontAwesomeIcon icon={faPhone} />
            </IconLink>
          </div>
        </FooterContainer>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
