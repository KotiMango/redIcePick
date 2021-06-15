import React from "react";
import "./ColorSwatch.css";

const ColorSwatch = ({ saturation, lightness, alpha }) => {
  let background = {
    backgroundColor:
      "hsla(0, " + saturation + "%, " + lightness + "%, " + alpha + ")",
  };
  return <div className="ColorSwatch" style={background}></div>;
};

export default ColorSwatch;
