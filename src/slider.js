import React from "react";

const Slider = (props) => {
  return (
    <input
      type="range"
      min={props.min}
      max={props.max}
      value={props.value}
      step={props.step}
      onChange={props.onChange}
    ></input>
  );
};

export default Slider;
