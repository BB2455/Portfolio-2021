import * as React from "react";
import {
  Card,
  LinkWrapper,
  TechTitle,
  ProjectTitle,
  LinkButton,
} from "./Projects.styled";
import { P } from "../shared";
import theme from "../../themes/theme";

const ProjectCard = ({ title, description, codeurl, liveurl, techUsed }) => {
  return (
    <Card>
      <ProjectTitle>{title}</ProjectTitle>
      <P margin="0 0 1rem 0" color={theme.secondaryColor}>
        {description}
      </P>
      <ProjectTitle>Technologies Used</ProjectTitle>
      <LinkWrapper>
        {techUsed.map((tech) => (
          <TechTitle>{tech}</TechTitle>
        ))}
      </LinkWrapper>
      <LinkWrapper>
        <LinkButton href={codeurl} target="_blank">
          View Code
        </LinkButton>
        <LinkButton href={liveurl} target="_blank">
          Live Site
        </LinkButton>
      </LinkWrapper>
    </Card>
  );
};

export default ProjectCard;
