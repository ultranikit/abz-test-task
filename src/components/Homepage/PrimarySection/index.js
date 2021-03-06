import React from "react";
import { Button } from "../../Button";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./style.scss";

export const PrimarySection = () => {
  const btnOptions = {
    title: <AnchorLink href="#signup">Sign up now</AnchorLink>,
    className: "primary-section__button",
    onClick: (e) => e.preventDefault(),
  };
  return (
    <div id="home" className="primary-section">
      <div className="container">
        <div className="primary-section__subcontainer">
          <div className="primary-section__content">
            <h1 className="primary-section__title">
              Test assignment for Frontend Developer position
            </h1>

            <p className="primary-section__description">
              We kindly remind you that your test assignment should be submitted
              as a link to github/bitbucket repository. Please be patient, we
              consider and respond to every application that meets minimum
              requirements. We look forward to your submission. Good luck! The
              photo has to scale in the banner area on the different screens
            </p>
            <Button options={btnOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};
