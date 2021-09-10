import * as React from "react";
import { Title, P, Section } from "../shared";
import { ContactContainer, ContactCard, ContactLink } from "./Contact.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { data } from "../../data/data";

const Contact = () => {
  return (
    <Section id="contact">
      <Title padding="0 0 1rem 0">Contact</Title>
      <P>Want To Get In Contact With Me?</P>
      <ContactContainer>
        <ContactCard>
          <FontAwesomeIcon icon={faPhone} />
          <ContactLink href={`tel:${data.phone}`}>{data.phoneText}</ContactLink>
        </ContactCard>
        <ContactCard>
          <FontAwesomeIcon icon={faEnvelope} />
          <ContactLink href={`mailto:${data.email}`}>
            {data.emailText}
          </ContactLink>
        </ContactCard>
      </ContactContainer>
    </Section>
  );
};

export default Contact;
