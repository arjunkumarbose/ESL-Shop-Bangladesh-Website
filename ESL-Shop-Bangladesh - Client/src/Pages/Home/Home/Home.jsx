import React, { useState } from "react";
import useTitle from "../../../Hooks/useTitle";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Features from "../Features/Features";
import Gallery from "../Gallery/Gallery";
import HomeProducts from "../Home Product/HomeProducts";
import Offer from "../Offer/Offer";

const Home = () => {
  useTitle("Home");

  // State to manage the theme (default to 'light' mode)
  const [theme, setTheme] = useState("light");

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Apply theme-specific styles
  const themeStyles = {
    backgroundColor: theme === "dark" ? "black" : "white",
    color: theme === "dark" ? "white" : "black",
  };

  // CSS styles for the button container
  const buttonContainerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  // CSS styles for the button
  const buttonStyles = {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "20px", // Adjust the font size as needed
  };

  return (
    <div style={themeStyles}>
      <div style={buttonContainerStyles}>
        <button onClick={toggleTheme} style={buttonStyles}>
          {theme === "dark" ? <FaRegSun /> : <FaRegMoon />}
          Toggle Theme
        </button>
      </div>
      <Banner></Banner>
      <Features></Features>
      <HomeProducts></HomeProducts>
      <Offer></Offer>
      <Gallery></Gallery>
      <Brand></Brand>
    </div>
  );
};

export default Home;
