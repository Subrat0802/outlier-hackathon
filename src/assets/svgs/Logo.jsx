import React from "react";

const Logo = () => {
  return (
    <svg
      width="160"
      height="40"
      viewBox="0 0 160 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#6366f1" />
          <stop offset="100%" stop-color="#06b6d4" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="30"
        font-family="Poppins, sans-serif"
        font-size="30"
        font-weight="600"
        fill="url(#grad)"
      >
        Brio
      </text>
    </svg>
  );
};

export default Logo;
