import * as React from "react";
import Title from "../shared/Title.styled.js";
import { Nav, NavLinks, NavLink } from "./NavBar.styled";

const NavBar = () => {
  return (
    <Nav>
      <Title>Blair Burke</Title>
      <NavLinks>
        <NavLink>About</NavLink>
        <NavLink>Project</NavLink>
        <NavLink>Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default NavBar;
