import React, { useContext } from "react";

import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <span
        style={{
          cursor: "pointer",
        }}
      >
        {themeMode === "light"
          ? "Click Me and lights will Turn Off"
          : "Click Me and Lights will On"}
      </span>
    </div>
  );
};

export default ThemeToggler;
