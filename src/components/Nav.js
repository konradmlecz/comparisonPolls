import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import NavItem from "./stylecomponents/NavItem";
import NavContainerRestrictive from "./stylecomponents/NavContainerRestrictive";
import NavContainerMain from "./stylecomponents/NavContainerMain";

export default withRouter(function Nav(props) {
  return (
    <>
      <NavContainerMain
        bgc={props.location.pathname === "/" || "var(--color-complementary)"}
      >
        <NavContainerRestrictive>
          <NavLink to="/" exact style={{ textDecoration: "none" }}>
            <NavItem>Start</NavItem>
          </NavLink>
          <NavLink
            to={{ pathname: "/choice" }}
            style={{ textDecoration: "none" }}
          >
            <NavItem
              border={"thin double"}
              backgroudcolor={
                props.location.pathname === "/"
                  ? "var(--color-complementary)"
                  : null
              }
            >
              Porównywarka {/* */}
            </NavItem>
          </NavLink>
          <NavLink to="/info" style={{ textDecoration: "none" }}>
            <NavItem>Informacje</NavItem>
          </NavLink>
        </NavContainerRestrictive>
      </NavContainerMain>
    </>
  );
});
