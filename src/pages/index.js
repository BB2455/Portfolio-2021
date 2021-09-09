import * as React from "react";
import { Landing, GlobalStyle } from "../components";
import { Container } from "../components/shared";

const IndexPage = () => {
  return (
    <Container>
      <GlobalStyle />

      <Landing />
      {/* <About /> */}
      {/* <Skills /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </Container>
  );
};

export default IndexPage;
