import React from "react";
import Nav from "./Nav";
import Paragraf from "./stylecomponents/Paragraf";
import Footer from "./stylecomponents/Footer";
import ErrorFetch from "./stylecomponents/ErrorFetch";
import SectionDirectColumn from "./stylecomponents/SectionDirectColumn";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WraperMain from "./stylecomponents/WraperMain";

export default function ErrorPage() {
  return (
    <>
      <WraperMain>
        <Nav />
        <SectionDirectColumn>
          <FontAwesomeIcon icon={faExclamation} className="exclamation" />
          <ErrorFetch>Nie ma takiej strony!</ErrorFetch>
        </SectionDirectColumn>
        <Footer bgc={"var(--color-complementary)"}>
          <Paragraf>K.M. Kraków 2019 - All rights reserved</Paragraf>
        </Footer>
      </WraperMain>
    </>
  );
}
