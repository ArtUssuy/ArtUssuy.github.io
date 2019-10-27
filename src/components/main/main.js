import React from "react";
import Header from "./../header/header";
import Content from "./content/content";
import Footer from "./../footer/footer";

import { Container } from "./styles";

const Main = () => {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
};

export default Main;
