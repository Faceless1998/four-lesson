/*
import React from "react";
import Todo from "./Todo"
import "style.css"
export const - გვერდი
export default - საიტის ნაწილი
className=""
class="" - warning
<img src="" alt="" /> 
import {Todo} from "./Todo"
*/

import React, { useState, useEffect } from "react";

const Switcher = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: darkMode ? "#333" : "#fff",
      color: darkMode ? "#fff" : "#333",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      border: "none",
      backgroundColor: darkMode ? "#bbb" : "#222",
      color: darkMode ? "#222" : "#bbb",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: darkMode ? "#ddd" : "#444",
      color: darkMode ? "#000" : "#fff",
    },
  };

  return (
    <>
      <div style={styles.container}>
        {/* <h1>  { argument ? 'True Answer' : 'False Answer' }  </h1> */}
        <h1> {darkMode ? "Dark Mode" : "Light Mode"} </h1>
        <button
          style={
            isHovered
              ? { ...styles.button, ...styles.buttonHover }
              : styles.button
          }
          onClick={() => setDarkMode(!darkMode)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Toggle Theme
        </button>
      </div>
    </>
  );
};

export default Switcher;
