import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const themes = ["light", "dark", "fresh", "luxury"];

    return (
        <div className="flex items-center gap-2">
            <span className="font-medium">Theme:</span>
            <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="border border-border bg-bg text-text rounded-md px-3 py-2 focus:outline-none"
            >
                {themes.map((t) => (
                    <option key={t} value={t}>
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ThemeToggle;
