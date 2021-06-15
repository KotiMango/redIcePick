import React from "react";
import ColorRange from "./ColorRange";

const ColorRanges = ({ saturation, lightness, alpha, updateColor }) => (
  <div id="ColorRanges">
    <ColorRange
      colorParameter="saturation"
      colorValue={saturation}
      updateColor={updateColor}
      step="1"
      min="0"
      max="100"
    />
    <ColorRange
      colorParameter="lightness"
      colorValue={lightness}
      updateColor={updateColor}
      step="1"
      min="0"
      max="100"
    />
    <ColorRange
      colorParameter="alpha"
      colorValue={alpha}
      updateColor={updateColor}
      step=".01"
      min="0"
      max="1"
    />
  </div>
);

export default ColorRanges;
