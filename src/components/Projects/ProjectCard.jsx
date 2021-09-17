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
          <TechTitle key={tech} title={tech}>
            {tech}
          </TechTitle>
        ))}
      </LinkWrapper>
      <LinkWrapper>
        {codeurl === "" ? null : (
          <LinkButton
            href={codeurl}
            target="_blank"
            title="Link to the projects code."
          >
            View Code
          </LinkButton>
        )}
        {liveurl === "" ? null : (
          <LinkButton
            href={liveurl}
            target="_blank"
            title="Link to the live site of this project."
          >
            Live Site
          </LinkButton>
        )}
        {(codeurl === "") & (liveurl === "") ? (
          <P margin="0 0 0 1rem">Links Coming Soon.</P>
        ) : null}
      </LinkWrapper>
    </Card>
  );
};

export default ProjectCard;
