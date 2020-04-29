import React from "react";
import "./MobileNavbarToggleButton.scss";

export const MobileNavbarToggleButton = ({ menuClickHandle }) => {
  return (
    <button className="mobile-toggle-btn" onClick={menuClickHandle}>
      <img src="/header/menu-icon.svg" alt="" />
    </button>
  );
};
