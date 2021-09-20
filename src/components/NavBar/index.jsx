import * as React from "react";
import { Title } from "../shared";
import { Nav, NavLinks, NavLink } from "./NavBar.styled";
import scrollTo from "gatsby-plugin-smoothscroll";

const NavBar = () => {
  return (
    <Nav>
      <Title to="/">Blair Burke</Title>
      <NavLinks>
        <NavLink onClick={() => scrollTo("#about")} title="About Me">About Me</NavLink>
        <NavLink onClick={() => scrollTo("#projects")} title="Projects">Projects</NavLink>
        <NavLink onClick={() => scrollTo("#contact")} title="Contact Me">Contact Me</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default NavBar;
