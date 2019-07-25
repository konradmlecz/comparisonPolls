import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import NavItem from "./stylecomponents/NavItem";
import NavContainer from "./stylecomponents/NavContainer";

export default withRouter(function Nav(props) {
  console.log(props.location.pathname);
  return (
    <>
      <NavContainer>
        <NavLink to="/" exact>
          <NavItem>Start</NavItem>
        </NavLink>
        <NavLink to="/choice">
          <NavItem
            border={"thick double"}
            backgroudcolor={props.location.pathname === "/" ? "#d90404" : null}
            color={props.location.pathname === "/" ? "white" : null}
          >
            Porównaj {/* */}
          </NavItem>
        </NavLink>
        <NavLink to="/contact">
          <NavItem>Kontakt</NavItem>
        </NavLink>
      </NavContainer>
    </>
  );
});
