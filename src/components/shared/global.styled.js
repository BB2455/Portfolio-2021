import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0;
    font-family: Poppins, sans-serif;
  }
  
  body {
    background: #121212;
    color: #FAFAFA;
    margin: 0 20%;
  }

`;

export default GlobalStyle;
