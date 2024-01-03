import { createContext, useState } from "react";

export interface ThemeContextProps {
  theme: string;
  handleTheme: (themeSelected: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const handleTheme = (themeSelected: string) => {
    setTheme(themeSelected);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
