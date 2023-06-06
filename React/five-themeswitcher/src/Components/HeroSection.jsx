import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";
import ThemeToggler from "./ThemeToggler";

// using ThemeContext in ThemeToggler as well as in HeroSection,
// In ThemeToggler the value of ThemeContext is affecting
// Due to this value of theme is going to change
// and theme value is directly related to currentTheme
// In this way the dark mode and light mode is going to work

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  // const [theme, setTheme]= useContext(ThemeContext);

  const currentTheme = AppTheme[theme]; // now access of all the properties of colors

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>This is nice paragraph</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#fff",
          border: `${currentTheme.border}`,
        }}
      >
        Button
      </button>
    </div>
  );
};

export default HeroSection;
