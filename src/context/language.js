import { createContext, useState } from "react";
import { Language } from "enums/language";

export const LanguageContext = createContext(undefined);
export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(Language.Python);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
