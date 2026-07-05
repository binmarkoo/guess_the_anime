import { useState, useEffect } from "react";

export function useTheme() {
    // read the saved theme, or default to dark
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });

    // whenever theme changes, update the <html> class and save it
    useEffect(() => {
        const root = document.documentElement; // this is the <html> element

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }

    return { theme, toggleTheme };
}