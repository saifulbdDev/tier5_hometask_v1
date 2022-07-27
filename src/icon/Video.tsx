import React from "react";
import { iconType } from '../types/global';
const Video: React.FC<iconType> = (props) => {
  const { className, height, width } = props;
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={`inline-block ${className}`}
    >
      <g fillRule="evenodd" transform="translate(-444 -156)">
        <g>
          <path
            d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z"
            transform="translate(354 158.5)"
          ></path>
          <path
            d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5"
            transform="translate(354 158.5)"
          ></path>
        </g>
      </g>
    </svg>
  );
};
export default Video;
