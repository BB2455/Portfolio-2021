import styled from "styled-components";
// import { device } from "../Devices";
// import GatsbyLink from "gatsby-link";
import theme from "../../themes/theme";

export const Nav = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const NavLinks = styled.div`
  display: flex;
`;

export const NavLink = styled.h2`
  font-size: 1rem;
  margin-left: 2rem;
  text-decoration: none;
  font-weight: 700;
  color: ${theme.mainColor};
  &:hover {
    color: #5cdb95;
  }
  cursor: pointer;
`;
