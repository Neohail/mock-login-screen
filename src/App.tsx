import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { ThemeConfig } from "./theme";
import "./i18n/config";

function App() {
  return (
    <ThemeConfig>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeConfig>
  );
}

export default App;
