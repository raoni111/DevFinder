import { createGlobalStyle } from "styled-components";
import * as color from "../config/color";

// Font
import SanchezSerif from "../fonts/Sanchez-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Sanchez-serif';
    src: local('Sanchez-serif'), url(${SanchezSerif});
    font-weight: 300;
    font-style: normal;

  }
  * {
    padding: 0;
    margin: 0;
    outline: none;
    border: none;
    font-family: 'Sanchez-serif';
    box-sizing: border-box;
  }
  #root {
    .App {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100vh;
      background-color: ${color.backgroundColor};
    }
  }
`;
export default GlobalStyle;
