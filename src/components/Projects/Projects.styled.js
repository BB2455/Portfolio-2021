import styled from "styled-components";
import theme from "../../themes/theme";
// import { device } from "../Devices";

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

export const Card = styled.div`
  padding: 2rem;
  width: 50%;
`;
export const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TechTitle = styled.h3`
  font-size: 1rem;
  background: #191919;
  padding: 0.5rem;
  margin: 0 1rem 2rem 0;
  border-radius: 10px;
  font-weight: 400;
  color: ${theme.secondaryColor};
`;

export const LinkButton = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
  text-decoration: underline;
  margin: 0 2rem 1rem 0;
  color: ${theme.mainColor};
  &:hover {
    color: #5cdb95;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;
