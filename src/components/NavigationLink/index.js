import React from "react";
import { Link } from "react-scroll";
const ItemLink = ({ title, link, onClick }) => {
  return (
    <Link
      to={link}
      spy={true}
      className="toolbar__navigation-items__menu__item-link"
      activeClass="toolbar__navigation-items__menu__item-link--active"
      smooth={true}
      duration={1000}
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

export default ItemLink;
