import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./stylecomponents/NavItem";
import NavContainer from "./stylecomponents/NavContainer";

export default function Nav(params) {
  return (
    <>
      <NavContainer>
        <NavLink to="/" exact>
          <NavItem>Home</NavItem>
        </NavLink>
        <NavLink to="/stat">
          <NavItem>Statystyki</NavItem>
        </NavLink>
        <NavLink to="/contact">
          <NavItem>Kontakt</NavItem>
        </NavLink>
      </NavContainer>
    </>
  );
}
