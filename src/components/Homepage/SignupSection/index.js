import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getUsersPositions,
  setSignupUserData,
  getSignupToken,
} from "../../../store";
import { SignupForm } from "../../SignupForm";
import "./styles.scss";

const mapStateToProps = (state) => ({
  usersPositions: state.users.usersPositions,
});

const actionCreator = {
  getUsersPositions,
  setSignupUserData,
  getSignupToken,
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
  } = props;

  useEffect(() => {
    getUsersPositions();
    getSignupToken();
  }, [getUsersPositions, getSignupToken]);
  return (
    <div className="signup-section">
      <div className="container">
        <h1 className="signup-section__title">Register to get a work</h1>
        <p className="signup-section__subtitle">
          Attention! After successful registration and alert, update the list of
          users in the block from the top
        </p>
        <SignupForm positions={usersPositions} submitData={setSignupUserData} />
      </div>
    </div>
  );
});
