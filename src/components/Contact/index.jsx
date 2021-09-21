import * as React from "react";
import { Title, Section } from "../shared";
import {
  ContactContainer,
  ContactCard,
  ContactLink,
  ContactText,
} from "./Contact.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useStaticQuery, graphql } from "gatsby";

const Contact = () => {
  let data = useStaticQuery(graphql`
    {
      allDataJson {
        edges {
          node {
            email
            emailText
          }
        }
      }
    }
  `);
  return (
    <Section id="contact">
      <Title padding="0 0 1rem 0">Contact</Title>
      <ContactText>
        If you have an opportunity for me, feel free to contact me at any time.
      </ContactText>
      <ContactContainer>
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
