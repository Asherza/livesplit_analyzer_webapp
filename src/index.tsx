import * as React from "react";
import { render } from "react-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import App from "./App";

import "./app.css";

const fgLoadCSS = require("fg-loadcss");

const root = document.createElement("div");
document.body.appendChild(root);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#344955",
    },
    secondary: {
      main: "#F9AA33",
    },
    background: {
      default: "#DDE0E2",
      paper: "#FEFEFE",
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    overline: { fontWeight: 600, fontSize: 12, textTransform: "capitalize" },
    caption: { fontWeight: 400, fontSize: 12 },
    button: { fontWeight: 500, fontSize: 14 },
    body2: { fontWeight: 400, fontSize: 14 },
    body1: { fontWeight: 400, fontSize: 18 },
    subtitle2: { fontWeight: 500, fontSize: 14 },
    subtitle1: { fontWeight: 700, fontSize: 16 },
    h6: { fontWeight: 500, fontSize: 20 },
    h5: { fontWeight: 700, fontSize: 24 },
    h4: { fontWeight: 400, fontSize: 34 },
    h3: { fontWeight: 400, fontSize: 48 },
    h2: { fontWeight: 600, fontSize: 60 },
    h1: { fontWeight: 300, fontSize: 96 },
  },
});

const AppRoot = () => {
  React.useEffect(() => {
    const node = fgLoadCSS.loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode!.removeChild(node);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

render(<AppRoot />, root);
