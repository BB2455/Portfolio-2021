import * as React from "react";
import {
  SkillsWrapper,
  SkillsContainer,
  SkillTitle,
  SkillName,
  TypeContainer,
  Container
} from "./Skills.styled";
import { Title } from "../shared";
import { useStaticQuery, graphql } from "gatsby";

const Skills = () => {
  let data = useStaticQuery(graphql`
    {
      allDataJson {
        edges {
          node {
            skills {
              languages
              frameworks
              otherSkills
            }
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <SkillsWrapper>
      <Title>Skills</Title>
      <SkillsContainer>
        <Container>
          <SkillTitle>Languages</SkillTitle>
          <TypeContainer>
            {data.allDataJson.edges[0].node.skills.languages.map((skill) => (
              <SkillName title={skill} key={skill}>
                {skill}
              </SkillName>
            ))}
          </TypeContainer>
        </Container>
        <Container>
          <SkillTitle>Frameworks</SkillTitle>
          <TypeContainer>
            {data.allDataJson.edges[0].node.skills.frameworks.map((skill) => (
              <SkillName title={skill} key={skill}>
                {skill}
              </SkillName>
            ))}
          </TypeContainer>
        </Container>
        <Container>
          <SkillTitle>Other Skills</SkillTitle>
          <TypeContainer>
            {data.allDataJson.edges[0].node.skills.otherSkills.map((skill) => (
              <SkillName title={skill} key={skill}>
                {skill}
              </SkillName>
            ))}
          </TypeContainer>
        </Container>
      </SkillsContainer>
    </SkillsWrapper>
  );
};

export default Skills;
