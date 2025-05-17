import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="px-6 py-3  text-black font-medium bg-gradient-to-r from-indigo-400 to-cyan-300 rounded-xl shadow-md hover:scale-105 transition-transform">
      {text}
    </button>
  );
};

export default Button;
