import { createGlobalStyle, ThemeProvider } from "styled-components";

import {
  styleReset
  // @ts-ignore
} from "react95";
// pick a theme of your choice
// @ts-ignore
import original from "react95/dist/themes/original";
// @ts-ignore
// import hotdogStand from "react95/dist/themes/hotdogStand";
// original Windows95 font (optionally)
// @ts-ignore
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
// @ts-ignore
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

import ForecastContainer from "./ForecastContainer";

import "./App.css";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

const App = () => (
  <div>
    <div
      style={{
        padding: "4rem 0 1rem 4rem"
      }}
    >
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <ForecastContainer />
      </ThemeProvider>
    </div>
  </div>
);

export default App;
