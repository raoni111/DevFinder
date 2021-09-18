import { createGlobalStyle } from "styled-components";
import * as color from "../config/color";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    height: 100vh;
    background-color: ${color.backgroundColor};
  }
`;
export default GlobalStyle;
