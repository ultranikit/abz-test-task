import React from "react";

export const Button = ({ options }) => {
  const { title, className, onClick } = options;
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};
