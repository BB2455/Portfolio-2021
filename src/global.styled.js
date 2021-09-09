import { createGlobalStyle } from "styled-components";
import theme from "./themes/theme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0;
    font-family: Poppins, sans-serif;
  }
  
  body {
    background: ${theme.backgroundColor};
    color: ${theme.mainColor};
  }

`;

export default GlobalStyle;
