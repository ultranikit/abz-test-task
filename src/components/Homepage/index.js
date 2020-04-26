import React, { Fragment } from "react";
import { PrimarySection } from "./PrimarySection";
import { DetailSection } from "./DetailSection";
import { UsersSection } from "./UsersSection";

export const Homepage = () => {
  return (
    <Fragment>
      <PrimarySection />
      <DetailSection />
      <UsersSection />
    </Fragment>
  );
};
