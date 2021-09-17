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
import { useStaticQuery, graphql } from "gatsby";

const Contact = () => {
  let data = useStaticQuery(graphql`
    {
      allDataJson {
        edges {
          node {
            phone
            email
            emailText
            phoneText
          }
        }
      }
    }
  `);
  return (
    <Section id="contact">
      <Title padding="0 0 1rem 0">Contact</Title>
      <ContactText>Want To Get In Contact With Me?</ContactText>
      <ContactContainer>
        <ContactCard>
          <FontAwesomeIcon icon={faPhone} title="Phone" />
          <ContactLink
            href={`tel:${data.allDataJson.edges[0].node.phone}`}
            title="Give Me A Call"
          >
            {data.allDataJson.edges[0].node.phoneText}
          </ContactLink>
        </ContactCard>
        <ContactCard>
          <FontAwesomeIcon icon={faEnvelope} title="Email" />
          <ContactLink
            href={`mailto:${data.allDataJson.edges[0].node.email}`}
            title="Email Me"
          >
            {data.allDataJson.edges[0].node.emailText}
          </ContactLink>
        </ContactCard>
      </ContactContainer>
    </Section>
  );
};

export default Contact;
