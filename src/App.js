import React from "react";
import "App.css";
import AppRoutes from "router/router";
import { LanguageContextProvider } from "context/language";
import { ThemeProvider } from "@mui/material";
import mainTheme from "themes/mainTheme";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <LanguageContextProvider>
        <AppRoutes />
      </LanguageContextProvider>
    </ThemeProvider>
  );
}

export default App;
