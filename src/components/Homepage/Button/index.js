import React from "react";

export const Button = ({ options }) => {
  const { title, className, handleClick } = options;
  return (
    <button className={className} onClick={handleClick}>
      <p>{title}</p>
    </button>
  );
};
