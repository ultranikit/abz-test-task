import React from "react";
import Img from "react-cool-img";

import "./styles.scss";

export const UserCard = ({ user }) => {
  const { name, email, position, photo, phone, id } = user;
  return (
    <div className="user-card">
      <div className="user-card__photo-container">
        <Img
          className="user-card__photo-container__image"
          placeholder="/user-card/photo-cover.png"
          src={photo}
          error="/user-card/photo-cover.png"
          alt={id}
        />
      </div>
      <div className="user-card__tooltip">
        <h2 className="user-card__name user-card__tooltip">{name}</h2>
        <span className="tooltiptext">{name}</span>
      </div>
      <div className="user-card__tooltip">
        <p className="user-card__position user-card__tooltip">{position}</p>
        <span className="tooltiptext">{position}</span>
      </div>
      <div className="user-card__tooltip">
        <p className="user-card__email user-card__tooltip">{email}</p>
        <span className="tooltiptext">{email}</span>
      </div>
      <div className="user-card__tooltip">
        <p className="user-card__phone">{phone}</p>
        <span className="tooltiptext">{phone}</span>
      </div>
    </div>
  );
};
