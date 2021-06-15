import React from "react";
import "./App.css";
import Header from "./Header";
import ColorRanges from "./range/ColorRanges";
import ColorSwatchAreas from "./swatch/ColorSwatchAreas";

//State default values
const App = React.createClass({
  getInitialState() {
    return {
      color: {
        saturation: 50,
        lightness: 50,
        alpha: 0.5,
      },
    };
  },
  updateColor(e) {
    let color = this.state.color;
    color[e.target.id] = e.target.value;
    this.setState(color);
  },
  render() {
    return (
      <div className="App">
        <Header />
        <ColorSwatchAreas
          saturation={this.state.color.saturation}
          lightness={this.state.color.lightness}
          alpha={this.state.color.alpha}
        />
        <ColorRanges
          saturation={this.state.color.saturation}
          lightness={this.state.color.lightness}
          alpha={this.state.color.alpha}
          updateColor={this.updateColor}
        />
      </div>
    );
  },
});

export default App;
