import React from "react";
import Nav from "./Nav";
import Section from "./stylecomponents/Section";
import Paragraf from "./stylecomponents/Paragraf";
import List from "./stylecomponents/List";
import ListItem from "./stylecomponents/ListItem";
import Link from "./stylecomponents/Link";
import Footer from "./stylecomponents/Footer";
import ContainerRestrictive from "./stylecomponents/ContainerRestrictive";
export default function StatContact(params) {
  return (
    <>
      <Nav />
      <Section bgc={"var(--color-light)"}>
        <ContainerRestrictive direction={"column"}>
          <Paragraf align={"justify"}>
            {" "}
            Aplikacja umożliwia porównanie wyników wyborów na poziomie
            województw, powiatów i gmin. Na tą chwilę dostępne są procentowe
            wyniki wyborów:
          </Paragraf>
          <List>
            <ListItem color={"var(--color-black)"}>
              1. Parlamentarne z dnia 25 października 2015r.
            </ListItem>
            <ListItem color={"var(--color-black)"}>
              2. Samorządowe z dnia 21 października 2018r.
            </ListItem>
            <ListItem color={"var(--color-black)"}>
              3. Do parlamentu Europejskiego z dnia 26 maja 2019r.
            </ListItem>
          </List>
          <Paragraf align={"justify"}>
            {" "}
            Uwaga!!! Przy porównywaniu danych, należy mieć na względzie że
            partie oraz ugrupowania politycznie startowały w różnych
            konfiguracjach z różnych komitetów wyborczych w ramach
            poszczególnych wyborów. W przypadku wyborów samorządowych
            uwzględnione są tylko wyniki do sejmików województw. Dane, ze
            wszystkich wyborów, obrazują tylko komitety startujące ogólnopolsko.
          </Paragraf>
          <Paragraf align={"justify"}>
            {" "}
            Źródło danych:{" "}
            <Link href="https://pkw.gov.pl/">https://pkw.gov.pl/</Link>{" "}
          </Paragraf>
        </ContainerRestrictive>
      </Section>
      <Footer bgc={"var(--color-complementary)"}>
        <Paragraf>K.M. Kraków 2019 - All rights reserved</Paragraf>
      </Footer>
    </>
  );
}
