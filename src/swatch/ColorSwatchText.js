import React from "react";

const ColorSwatchText = ({ saturation, lightness, alpha, text }) => {
  const hue = 0;
  return (
    <div className="ColorSwatchText">
      <p>
        {text}
        <br />
        HSLA: ({hue}, {saturation}%, {lightness}%, {alpha})
      </p>
    </div>
  );
};

export default ColorSwatchText;
