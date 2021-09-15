import * as React from "react";
import { Title, Section } from "../shared";
import {
  ContactContainer,
  ContactCard,
  ContactLink,
  ContactText,
} from "./Contact.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { data } from "../../data/data";

const Contact = () => {
  return (
    <Section id="contact">
      <Title padding="0 0 1rem 0">Contact</Title>
      <ContactText>Want To Get In Contact With Me?</ContactText>
      <ContactContainer>
        <ContactCard>
          <FontAwesomeIcon icon={faPhone} />
          <ContactLink href={`tel:1123123124`}>1-123-123-1234</ContactLink>
        </ContactCard>
        <ContactCard>
          <FontAwesomeIcon icon={faEnvelope} />
          <ContactLink href={`mailto:email@email.com`}>
            Email@Email.com
          </ContactLink>
        </ContactCard>
      </ContactContainer>
    </Section>
  );
};

export default Contact;
