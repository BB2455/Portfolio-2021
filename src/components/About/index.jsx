import * as React from "react";
import { Title, P, Section } from "../shared";
import {useStaticQuery, graphql} from "gatsby"

const About = () => {
  let data = useStaticQuery(graphql`
    {
      allDataJson {
        edges {
          node {
            aboutMeText
          }
        }
      }
    }
  `);
  return (
    <Section id="about">
      <Title>About Me</Title>
      <P>
        {data.allDataJson.edges[0].node.aboutMeText}
      </P>
    </Section>
  );
};

export default About;
