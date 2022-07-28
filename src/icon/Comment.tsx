import React from "react";
import { iconType } from "../types/global";
const Comment: React.FC<iconType> = (props) => {
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
     
        <path
          d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
     </svg>
  );
};
export default Comment;
