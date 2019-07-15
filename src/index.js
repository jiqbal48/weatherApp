import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "pcln-design-system";

import "./styles.css";

function App() {
  return (
    <ThemeProvider>
      <h1>hello sky</h1>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
