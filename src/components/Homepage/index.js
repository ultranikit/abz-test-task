import React, { Fragment } from "react";
import { PrimarySection } from "./PrimarySection";
import { DetailSection } from "./DetailSection";
import { UsersSection } from "./UsersSection";
import { SignupSection } from "./SignupSection";

export const Homepage = () => {
  return (
    <Fragment>
      <PrimarySection />
      <DetailSection />
      <UsersSection />
      <SignupSection />
    </Fragment>
  );
};
