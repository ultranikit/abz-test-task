import React from "react";
import { NavLink } from "react-router-dom";

const ItemLink = ({ title, link, onClick }) => {
  return (
    <NavLink
      to={link}
      className="toolbar__navigation-items__menu__item-link"
      activeClassName="toolbar__navigation-items__menu__item-link--active"
      onClick={onClick}
    >
      {title}
    </NavLink>
  );
};

export default ItemLink;
