import React from "react";
import "./Backdrop.scss";

export const Backdrop = ({ backdropClickHandle }) => (
  <div onClick={backdropClickHandle} className="backdrop" />
);
