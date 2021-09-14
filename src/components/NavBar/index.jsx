import * as React from "react";
import { Title } from "../shared";
import { Nav, NavLinks, NavLink } from "./NavBar.styled";
import scrollTo from "gatsby-plugin-smoothscroll";

const NavBar = () => {
  return (
    <Nav>
      <Title to="/">Blair Burke</Title>
      <NavLinks>
        <NavLink onClick={() => scrollTo("#about")}>About Me</NavLink>
        <NavLink onClick={() => scrollTo("#projects")}>Projects</NavLink>
        <NavLink onClick={() => scrollTo("#contact")}>Contact Me</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default NavBar;
