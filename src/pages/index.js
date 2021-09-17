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
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Blair's Porfolio</title>
      </Helmet>
      <Container>
        <GlobalStyle />
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};

export default IndexPage;
