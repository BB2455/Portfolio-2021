import * as React from "react";
import GlobalStyle from "../global.styled";
import { Landing } from "../components";
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
