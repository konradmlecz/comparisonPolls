import React from "react";
import Nav from "./Nav";
import img from "../images/ballot-box-32384.svg";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cite from "./stylecomponents/Cite";
import BackgroundImage from "./stylecomponents/BackgroundImage";
import Section from "./stylecomponents/Section";
import ContainerSectionAbsolute from "./stylecomponents/ContainerSectionAbsolute";
import ContainerHeader from "./stylecomponents/ContainerHeader";
import Container30 from "./stylecomponents/Container30";
import Paragraf from "./stylecomponents/Paragraf";
import BannerText from "./stylecomponents/BannerText";
import Image from "./stylecomponents/Image";
import Footer from "./stylecomponents/Footer";
import ContainerRestrictive from "./stylecomponents/ContainerRestrictive";
import ContainerDevideToHalf from "./stylecomponents/ContainerDevideToHalf";
import BannerArrow from "./stylecomponents/BannerArrow";
import Header from "./stylecomponents/Header";

export default function StatStart(props) {
  return (
    <>
      <BackgroundImage />
      <Nav />
      <ContainerSectionAbsolute>
        <ContainerHeader bgc={"var(--color-complementary)"}>
          <ContainerRestrictive>
            <Header>Porównywarka wyborów</Header>
          </ContainerRestrictive>
        </ContainerHeader>
        <Section bgc={"var(--color-light)"}>
          <ContainerRestrictive>
            <ContainerDevideToHalf>
              <Image src={img} width={"100%"} />
            </ContainerDevideToHalf>
            <ContainerDevideToHalf>
              <Cite>
                {" "}
                Władza korumpuje, a władza absolutna korumpuje absolutnie - John
                Acton
              </Cite>

              <Cite>
                Bez społeczeństwa obywatelskiego nie ma demokracji - Ernest
                Gellner
              </Cite>
            </ContainerDevideToHalf>
          </ContainerRestrictive>
        </Section>
        <Section bgc={"var(--color-white)"}>
          <ContainerRestrictive>
            <BannerText>Sprawdź wyniki wyborów w swojej gminie!</BannerText>
            <Container30>
              <BannerArrow>>>></BannerArrow>
              <NavLink to="/choice">
                <FontAwesomeIcon icon={faSearch} className="magnifying-glass" />
              </NavLink>
            </Container30>
          </ContainerRestrictive>
        </Section>
        <Footer bgc={"var(--color-complementary)"}>
          <Paragraf>K.M. Kraków 2019 - All rights reserved</Paragraf>
        </Footer>
      </ContainerSectionAbsolute>
    </>
  );
}
