import React from "react";
import { Button } from "../Button";
import "./style.scss";

export const PrimarySection = () => {
  const btnOptions = {
    title: "Sign up now",
    className: "primary-section__button",
    onClick: "",
  };
  return (
    <div className="primary-section">
      <div className="container">
        <h1 className="primary-section__title">Test assignment</h1>
        <h1 className="primary-section__title">for Frontend</h1>
        <h1 className="primary-section__title">Developer position</h1>
        <p className="primary-section__description">
          We kindly remind you that your test assignment should be submitted as
          a link to github/bitbucket repository. Please be patient, we consider
          and respond to every application that meets minimum requirements. We
          look forward to your submission. Good luck! The photo has to scale in
          the banner area on the different screens
        </p>
        <Button options={btnOptions} />
      </div>
    </div>
  );
};