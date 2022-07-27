import React from "react";
import { iconType } from "../types/global";
const Grid: React.FC<iconType>  = (props) => {
 const {className, height, width} = props
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 44 44"
      width={width}
      height={height}
      className={`inline-block ${className}`}
    >
      <circle cx="7" cy="7" r="6"></circle>
      <circle cx="22" cy="7" r="6"></circle>
      <circle cx="37" cy="7" r="6"></circle>
      <circle cx="7" cy="22" r="6"></circle>
      <circle cx="22" cy="22" r="6"></circle>
      <circle cx="37" cy="22" r="6"></circle>
      <circle cx="7" cy="37" r="6"></circle>
      <circle cx="22" cy="37" r="6"></circle>
      <circle cx="37" cy="37" r="6"></circle>
    </svg>
  );
};
export default Grid;
