import * as React from "react";
import { Title } from "../shared";
import { ProjectWrapper, ImageContainer, MoreLink } from "./Projects.styled";
import ProjectCard from "./ProjectCard";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

const Projects = () => {
  let data = useStaticQuery(graphql`
    {
      allDataJson {
        edges {
          node {
            projects {
              codeurl
              description
              liveurl
              techUsed
              title
              image {
                childImageSharp {
                  gatsbyImageData(width: 500)
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <Title id="projects">Projects</Title>

      {data.allDataJson.edges[0].node.projects.map((project) => {
        let projectImage = getImage(
          project.image.childImageSharp.gatsbyImageData
        );
        return (
          <ProjectWrapper key={Math.random() * 10000}>
            <ProjectCard
              title={project.title}
              description={project.description}
              codeurl={project.codeurl}
              liveurl={project.liveurl}
              techUsed={project.techUsed}
            />
            <ImageContainer>
              <GatsbyImage
                image={projectImage}
                alt={`${project.title} preview`}
              />
            </ImageContainer>
          </ProjectWrapper>
        );
      })}

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <MoreLink
          href="https://github.com/BB2455?tab=repositories"
          target="_blank"
        >
          More Projects
        </MoreLink>
      </div>
    </>
  );
};

export default Projects;
