import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {
  getUsersPositions,
  setSignupUserData,
  getSignupToken,
  saveToStorage,
  loadFromStorage,
  setSignupToken,
  setModalWindowOptions,
} from "../../../store";
import { SignupForm } from "../../SignupForm";
import { ModalWindow } from "../../";
import "./styles.scss";

// for form we need positions of users
// and also options for modal window (to understand what we will draw inside component)
const mapStateToProps = (state) => ({
  usersPositions: state.users.usersPositions,
  modalWindowOptions: state.users.modalWindowOptions,
});

// actions
const actionCreator = {
  getUsersPositions,
  setSignupUserData,
  getSignupToken,
  saveToStorage,
  loadFromStorage,
  setModalWindowOptions,
};
export const SignupSection = connect(
  mapStateToProps,
  actionCreator
)((props) => {
  const {
    getUsersPositions,
    usersPositions,
    setSignupUserData,
    getSignupToken,
    modalWindowOptions,
    setModalWindowOptions,
  } = props;

  // function close modal button , change state for closing modal
  const closeModalWindow = () => setModalWindowOptions(false);
  /* function to get new token (if we are trying register new user and getting error 401 that token
     expiried) we will get modal window with error message and button for ask new token 
  */
  const getTokenModalWindow = () => {
    getSignupToken();
    closeModalWindow();
  };
  // empty object to complete data from response and move it to modal
  let modalOptions = {};

  // 3 buttons options
  const defaulModalBtn = {
    title: "OK",
    className: "modal-window__button",
    onClick: closeModalWindow,
  };

  const successModalBtn = {
    title: "Great",
    className: "modal-window__button",
    onClick: closeModalWindow,
  };
  const getNewTokenBtn = {
    title: "Get new Token",
    className: "modal-window__button",
    onClick: getTokenModalWindow,
  };

  // settings for modal window. Includes message, modal title, and button options
  if (modalWindowOptions) {
    const responseStatus = modalWindowOptions.status;
    const responseData = modalWindowOptions.data;
    modalOptions.title = "Error";
    modalOptions.btnOptions = defaulModalBtn;
    modalOptions.message = responseData.message;

    if (responseStatus === 401) {
      modalOptions.btnOptions = getNewTokenBtn;
    } else if (responseStatus === 201) {
      modalOptions.title = "Congratulations";
      modalOptions.btnOptions = successModalBtn;
    } else if (responseStatus === 409) {
      modalOptions.btnOptions = defaulModalBtn;
    } else {
      modalOptions.message = "Unexpected error";
    }
  }

  // when page loading we will check token (if we have it, take it from local storage else make request)
  useEffect(() => {
    getUsersPositions();
    const token = loadFromStorage("token");
    if (token) {
      setSignupToken(token);
    } else {
      getSignupToken();
    }
  }, [getUsersPositions, getSignupToken]);
  return (
    <Fragment>
      <div id={"signup"} className="signup-section">
        <div className="container">
          <h1 className="signup-section__title">Register to get a work</h1>
          <p className="signup-section__subtitle">
            Attention! After successful registration and alert, update the list
            of users in the block from the top
          </p>
          <SignupForm
            positions={usersPositions}
            submitData={setSignupUserData}
          />
        </div>
      </div>

      {modalWindowOptions && (
        <ModalWindow
          options={modalOptions}
          closeClickHandle={closeModalWindow}
        />
      )}
    </Fragment>
  );
});
