import * as React from "react";
import { Title } from "../shared";
import { Nav, NavLinks, NavLink } from "./NavBar.styled";

const NavBar = () => {
  return (
    <Nav>
      <Title>Blair Burke</Title>
      <NavLinks>
        <NavLink to="#about">About</NavLink>
        <NavLink to="#projects">Project</NavLink>
        <NavLink to="#contact">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default NavBar;
