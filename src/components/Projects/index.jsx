import * as React from "react";
import { Title } from "../shared";
// import { data } from "../../data/data";
import { ProjectWrapper } from "./Projects.styled";
import ProjectCard from "./ProjectCard";
import { StaticImage } from "gatsby-plugin-image";

const Projects = () => {
  return (
    <>
      <Title id="projects">Projects</Title>

      {/* {data.projects.map((project) => (
        <ProjectWrapper key={Math.random() * 10000}>
          <ProjectCard
            title={project.title}
            description={project.description}
            codeurl={project.codeurl}
            liveurl={project.liveurl}
            techUsed={project.techUsed}
          />
          <StaticImage
            src="../../images/project-1.png"
            alt={`${project.title} preview`}
          />
        </ProjectWrapper>
      ))} */}
    </>
  );
};

export default Projects;
