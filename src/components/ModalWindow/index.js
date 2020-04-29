import React, { Fragment } from "react";
import { Backdrop, Button } from "../";
import "./styles.scss";

export const ModalWindow = ({
  options: { title, message, btnOptions },
  closeClickHandle,
}) => {
  const closeBtnOptions = {
    title: <img src="./close-icon.svg" alt="close" />,
    className: "modal-window__close-btn",
    onClick: closeClickHandle,
  };

  return (
    <Fragment>
      <Backdrop />
      <div className="modal-window">
        <div className="modal-window__content-container">
          <div className="modal-window__title-container">
            <h2 className="modal-window__title">{title}</h2>
            <Button options={closeBtnOptions} />
          </div>
        </div>
        <div className="modal-window__message-container">
          <div className="modal-window__content-container">
            <p className="modal-window__message">{message}</p>
          </div>
        </div>
        <div className="modal-window__button-container">
          <div className="modal-window__content-container">
            <Button options={btnOptions} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
