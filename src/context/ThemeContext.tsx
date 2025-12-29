import { createContext, useContext, useEffect, useState ,ReactNode} from "react";

const ThemeContext = createContext<{ isDark: boolean; toggleTheme: () => void; }>({ isDark: false, toggleTheme: () => {} });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
