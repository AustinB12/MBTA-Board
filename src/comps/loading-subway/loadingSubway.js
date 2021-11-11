import React from "react";

import "./loadingSubway.css";

const LoadingSubway = () => {
  return (
    <div className="subway-wrapper">
      <svg
        id="subway"
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="18"
        viewBox="0 0 128 18"
        fill="none"
      >
        <g id="LoadingSubway">
          <rect
            id="Rectangle 57"
            y="14"
            width="128"
            height="4"
            rx="2"
            fill="#C4C4C4"
          />
          <g id="Group-1">
            <rect
              id="Rectangle 58"
              x="86.75"
              y="0.75"
              width="39.5"
              height="12.5"
              rx="1.25"
              fill="#D1D3D4"
              stroke="#58595B"
              strokeWidth="0.5"
            />
            <path
              id="Rectangle 63"
              d="M87 8H126V12C126 12.5523 125.552 13 125 13H88C87.4477 13 87 12.5523 87 12V8Z"
              fill="#DD2E44"
            />
            <rect
              id="Rectangle 64"
              width="9"
              height="4"
              rx="1"
              transform="matrix(1 0 0 -1 89 7)"
              fill="#55ACEE"
            />
            <rect
              id="Rectangle 65"
              width="9"
              height="4"
              rx="1"
              transform="matrix(1 0 0 -1 102 7)"
              fill="#55ACEE"
            />
            <rect
              id="Rectangle 66"
              width="9"
              height="4"
              rx="1"
              transform="matrix(1 0 0 -1 115 7)"
              fill="#55ACEE"
            />
          </g>
          <g id="Group-2">
            <rect
              id="Rectangle 67"
              x="43.75"
              y="0.75"
              width="39.5"
              height="12.5"
              rx="1.25"
              fill="#D1D3D4"
              stroke="#58595B"
              strokeWidth="0.5"
            />
            <path
              id="Rectangle 68"
              d="M44 8H83V12C83 12.5523 82.5523 13 82 13H45C44.4477 13 44 12.5523 44 12V8Z"
              fill="#DD2E44"
            />
            <rect
              id="Rectangle 69"
              width="9"
              height="4"
              rx="1"
              transform="matrix(1 0 0 -1 46 7)"
              fill="#55ACEE"
            />
            <rect
              id="Rectangle 70"
              width="9"
              height="4"
              rx="1"
              transform="matrix(1 0 0 -1 59 7)"
              fill="#55ACEE"
            />
            <rect
              id="Rectangle 71"
              width="9"
              height="4"
              rx="1"
              transform="matrix(1 0 0 -1 72 7)"
              fill="#55ACEE"
            />
          </g>
          <g id="Group-3">
            <rect
              id="Rectangle 72"
              x="0.75"
              y="0.75"
              width="39.5"
              height="12.5"
              rx="1.25"
              fill="#D1D3D4"
              stroke="#58595B"
              strokeWidth="0.5"
            />
            <path
              id="Rectangle 73"
              d="M1 8H40V12C40 12.5523 39.5523 13 39 13H2C1.44772 13 1 12.5523 1 12V8Z"
              fill="#DD2E44"
            />
            <rect
              id="Rectangle 74"
              width="9"
              height="4"
              rx="1"
              transform="matrix(1 0 0 -1 3 7)"
              fill="#55ACEE"
            />
            <rect
              id="Rectangle 75"
              width="9"
              height="4"
              rx="1"
              transform="matrix(1 0 0 -1 16 7)"
              fill="#55ACEE"
            />
            <rect
              id="Rectangle 76"
              width="9"
              height="4"
              rx="1"
              transform="matrix(1 0 0 -1 29 7)"
              fill="#55ACEE"
            />
          </g>
        </g>
      </svg>
      <div className="loading-text">Loading...</div>
    </div>
  );
};
export default LoadingSubway;
