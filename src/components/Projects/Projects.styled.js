import styled from "styled-components";
import theme from "../../themes/theme";
import { device } from "../Devices";

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.lg} {
    flex-direction: column;
    align-items: start;
  }
  @media ${device.sm} {
    align-items: center;
  }
`;

export const Card = styled.div`
  padding: 1rem;
  width: 50%;
  @media ${device.lg} {
    width: 100%;
  }
`;
export const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${device.sm} {
    justify-content: center;
  }
`;

export const TechTitle = styled.h3`
  font-size: 1rem;
  background: #191919;
  padding: 0.5rem;
  margin: 0 1rem 2rem 0;
  border-radius: 10px;
  font-weight: 400;
  color: ${theme.secondaryColor};
  @media ${device.md} {
    font-size: 0.75rem;
    margin: 0 0.25rem 1rem 0.25rem;
  }
  @media ${device.sm} {
  }
`;

export const ImageContainer = styled.div`
  @media ${device.lg} {
    margin: 0 auto;
  }
`;

export const LinkButton = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
  text-decoration: underline;
  margin: 0 1rem 1rem 1rem;
  color: ${theme.mainColor};
  &:hover {
    color: #5cdb95;
  }
  @media ${device.md} {
    font-size: 1rem;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  @media ${device.sm} {
    text-align: center;
  }
`;
