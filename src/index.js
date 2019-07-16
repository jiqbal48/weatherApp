import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, Box, Text } from "pcln-design-system";

import "./styles.css";

function App() {
  return (
    <ThemeProvider>
      <Box p={3} bg="#c0cad5" color="#007aff">
        <Text>hello sky</Text>
      </Box>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
