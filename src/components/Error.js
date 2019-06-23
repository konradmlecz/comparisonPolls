import React from "react";
import Nav from "./Nav";
import Container from "./stylecomponents/Container";
import Paragraf from "./stylecomponents/Paragraf";

export default function StatMain() {
  return (
    <>
      <Nav />
      <Container paddingtop={"20px"}>
        <Paragraf>Nie Ma takiej strony</Paragraf>
      </Container>
    </>
  );
}
