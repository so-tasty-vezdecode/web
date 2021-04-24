import { createGlobalStyle } from "styled-components";

export const font300 = `"font300", "Arial" !important;`;
export const font500 = `"font500", "Arial" !important;`;
export const font700 = `"font700", "Arial" !important;`;
export const font900 = `"font900", "Arial" !important;`;

export const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: "font500", "Arial";
    }

  @font-face {
    font-family: 'font300';
    src: url('fonts/MuseoSansCyrl-300.woff2');
  }

  @font-face {
    font-family: 'font500';
    src: url('fonts/MuseoSansCyrl-500.woff2');
  }

  @font-face {
    font-family: 'font700';
    src: url('fonts/MuseoSansCyrl-700.woff2');
  }

  @font-face {
    font-family: 'font900';
    src: url('fonts/MuseoSansCyrl-900.woff2');
  }
`;
