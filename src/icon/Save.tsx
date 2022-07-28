import React from "react";
import { iconType } from "../types/global";
const Save: React.FC<iconType> = (props) => {
  const { className, height, width } = props;
  return (
    <svg
      width={width}
      height={height}
      className={`inline-block ${className}`}
      color="#8e8e8e"
        fill="#8e8e8e"
      role="img"
      viewBox="0 0 24 24"
    >
     
     
        <polygon
          fill="none"
          points="20 21 12 13.44 4 21 4 3 20 3 20 21"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></polygon>
      
    </svg>
  );
};
export default Save;
