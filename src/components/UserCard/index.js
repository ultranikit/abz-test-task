import React from "react";
import "./styles.scss";

export const UserCard = ({ user }) => {
  const { name, email, position, photo, phone, id } = user;
  return (
    <div className="user-card">
      <div className="user-card__photo-container">
        <img
          className="user-card__photo-container__image"
          src={photo}
          alt={id}
        />
      </div>
      <h2 className="user-card__name">{name}</h2>
      <p className="user-card__position">{position}</p>
      <p className="user-card__email">{email}</p>
      <p className="user-card__phone">{phone}</p>
    </div>
  );
};
