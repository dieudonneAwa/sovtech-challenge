import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "./theme";

const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(p) => p.theme.font.family.default};
    font-size: ${(p) => p.theme.font.size.md};
    background: ${(p) => p.theme.colors["primaryBg"]};
    color: ${(p) => p.theme.colors.white};
    padding: 0;
    overflow-x: hidden;
    line-height: 28px;
    -webkit-font-smoothing: antialiased;
    .cursor-pointer { cursor: pointer; }

    a {
        color: ${(p) => p.theme.colors.primaryBlue};
    }
  }
`;

export default GlobalStyles;
