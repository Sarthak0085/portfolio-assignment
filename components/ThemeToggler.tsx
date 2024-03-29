import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const initialTheme = darkModeQuery.matches ? "dark" : "light";
    setTheme(initialTheme);
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <button
      className="w-9 h-9 bg-black rounded-full dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-orange-400 transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Theme Mode"
    >
      {theme === "light" ? (
        <IoMoonOutline className="text-orange-500 w-6 h-6" />
      ) : (
        <MdOutlineWbSunny className="text-orange-400 w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggler;
