import React from "react";
import { UserCard } from "../UserCard";

export const UsersList = ({ users }) => {
  return users && users.map((item) => <UserCard key={item.id} user={item} />);
};
