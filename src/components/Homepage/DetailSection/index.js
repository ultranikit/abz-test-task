import React from "react";
import { Button } from "../Button";
import "./style.scss";

export const DetailSection = () => {
  const btnOptions = {
    title: "Sign up now",
    className: "detail-section__description-container__button",
    onClick: "",
  };
  return (
    <div className="detail-section">
      <div className="container">
        <h1 className="detail-section__title">Let's get acquainted</h1>

        <div className="detail-section__flex-container">
          <div className="detail-section__image-container">
            <img src="/detail-section/detail-section-img.png" alt="work" />
          </div>
          <div className="detail-section__description-container">
            <h2 className="detail-section__description-container__subtitle">
              I am cool frontend developer
            </h2>
            <p className="detail-section__description-container__description">
              We will evaluate how clean your approach to writing CSS and
              Javascript code is. You can use any CSS and Javascript 3rd party
              libraries without any restriction.
            </p>
            <p className="detail-section__description-container__description">
              If 3rd party css/javascript libraries are added to the project via
              bower/npm/yarn you will get bonus points. If you use any task
              runner (gulp/webpack) you will get bonus points as well. Slice
              service directory page PSD mockupp into HTML5/CSS3.
            </p>

            <Button options={btnOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};
