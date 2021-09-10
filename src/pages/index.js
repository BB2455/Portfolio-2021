import * as React from "react";
import GlobalStyle from "../global.styled";
import {
  Landing,
  Projects,
  About,
  Skills,
  Contact,
  Footer,
} from "../components";
import { Container } from "../components/shared";

const IndexPage = () => {
  return (
    <Container>
      <GlobalStyle />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
};

export default IndexPage;
