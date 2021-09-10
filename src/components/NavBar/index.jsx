import * as React from "react";
import { Title } from "../shared";
import { Nav, NavLinks, NavLink } from "./NavBar.styled";

const NavBar = () => {
  return (
    <Nav>
      <Title to="/">Blair Burke</Title>
      <NavLinks>
        <NavLink to="/#about">About Me</NavLink>
        <NavLink to="/#projects">Projects</NavLink>
        <NavLink to="/#contact">Contact Me</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default NavBar;
