import React from "react";
import { iconType } from "../types/global";

const MoreOptions: React.FC<iconType> = (props) => {
  const { className, height, width } = props;
  return (
    <svg
      width={width}
      height={height}
      className={`inline-block ${className}`}
      color="#262626"
      fill="#262626"
      role="img"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="6" cy="12" r="1.5"></circle>
      <circle cx="18" cy="12" r="1.5"></circle>
    </svg>
  );
};
export default MoreOptions;
