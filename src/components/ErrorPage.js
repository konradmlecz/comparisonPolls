import React from "react";
import Nav from "./Nav";
import Paragraf from "./stylecomponents/Paragraf";
import Footer from "./stylecomponents/Footer";
import ErrorFetch from "./stylecomponents/ErrorFetch";
import ContainerError from "./stylecomponents/ContainerError";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ErrorPage() {
  return (
    <>
      <Nav />
      <ContainerError mh={"90vh"}>
        <FontAwesomeIcon icon={faExclamation} className="exclamation" />
        <ErrorFetch>Nie ma takiej strony!</ErrorFetch>
      </ContainerError>
      <Footer bgc={"var(--color-complementary)"}>
        <Paragraf>K.M. Kraków 2019 - All rights reserved</Paragraf>
      </Footer>
    </>
  );
}
