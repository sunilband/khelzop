"use client";
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

type ThemeContextType = {
  currentTheme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: "light",
  toggleTheme: () => {},
});

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [currentTheme, setTheme] = useState(() => {
    const localTheme = localStorage?.getItem("theme");
    return localTheme ? localTheme : "light";
  });

  useEffect(() => {
    const localTheme = localStorage?.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage?.setItem("theme", currentTheme);
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
