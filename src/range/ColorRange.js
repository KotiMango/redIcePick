import React from "react";
import "./ColorRange.css";

const ColorRange = ({
  colorParameter,
  colorValue,
  updateColor,
  step,
  min,
  max,
}) => {
  return (
    <div className="ColorRange">
      <p>
        {colorParameter.toUpperCase()}: {colorValue}
      </p>
      <input
        id={colorParameter}
        type="range"
        step={step}
        min={min}
        max={max}
        value={colorValue}
        onChange={updateColor}
      />
    </div>
  );
};

export default ColorRange;
