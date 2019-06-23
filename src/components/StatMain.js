import React from "react";
import Nav from "./Nav";
import BackGround from "./stylecomponents/Background";
import Header from "./stylecomponents/Header";

export default function StatMain(params) {
  return (
    <>
      <Nav />
      <BackGround />
      <Header>Porównywarka wyborów</Header>
    </>
  );
}
