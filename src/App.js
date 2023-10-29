import React from "react";
import "App.css";
import AppRoutes from "router/router";
import { LanguageContextProvider } from "context/language";

function App() {
  return (
    <LanguageContextProvider>
      <AppRoutes />
    </LanguageContextProvider>
  );
}

export default App;
