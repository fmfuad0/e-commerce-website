import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setThemeState] = useState("light");


    useEffect(() => {
        const saved = localStorage.getItem("theme") || "light";
        setThemeState(saved);
        document.documentElement.setAttribute("data-theme", saved);
    }, []);

    const setTheme = (name) => {
        setThemeState(name);
        document.documentElement.setAttribute("data-theme", name);
        localStorage.setItem("theme", name);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
