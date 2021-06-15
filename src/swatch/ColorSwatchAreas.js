import React from "react";
import ColorSwatchArea from "./ColorSwatchArea";

const ColorSwatchAreas = ({ saturation, lightness, alpha }) => (
  <div className="ColorSwatches">
    <ColorSwatchArea
      saturation={saturation}
      lightness={lightness}
      alpha={alpha}
      key="2"
      text="Color"
    />
  </div>
);

export default ColorSwatchAreas;
