import React from "react";
import ColorSwatch from "./ColorSwatch";
import ColorSwatchText from "./ColorSwatchText";
import "./ColorSwatchArea.css";

const ColorSwatchArea = ({ saturation, lightness, alpha, text }) => {
  return (
    <div className="ColorSwatchArea">
      <ColorSwatch
        saturation={saturation}
        lightness={lightness}
        alpha={alpha}
      />
      <ColorSwatchText
        saturation={saturation}
        lightness={lightness}
        alpha={alpha}
        text={text}
      />
    </div>
  );
};

export default ColorSwatchArea;
