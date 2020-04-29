import React from "react";
import ItemLink from "../NavigationLink";
import "./MobileNavbar.scss";

export const MobileNavbar = (props) => {
  const { closeOnLinkClick, show } = props;
  const handleLinkClick = closeOnLinkClick;
  let mobileNavClass = "mobile-navigation";
  if (show) {
    mobileNavClass = "mobile-navigation mobile-navigation-open";
  }
  return (
    <nav className={mobileNavClass}>
      <div className="mobile-navigation__logo">
        <ItemLink
          onClick={handleLinkClick}
          title={<img src="/header/logo.svg" alt="" />}
          link={"/"}
        />
      </div>
      <ul className="mobile-navigation__menu">
        <li className="mobile-navigation__menu__item">
          <ItemLink title={"About me"} link={"about"} />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"Relationships"}
            link={"relationships"}
          />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink title={"Users"} link={"users"} />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"Sign Up"}
            link={"signup"}
          />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"Terms and Conditions"}
            link={"terms"}
          />
        </li>
      </ul>

      <ul className="mobile-navigation__menu">
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"How it works"}
            link={"how"}
          />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"Partnership"}
            link={"partnership"}
          />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink onClick={handleLinkClick} title={"Help"} link={"help"} />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"Leave testimonial"}
            link={"testimonail"}
          />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"Contact us"}
            link={"contacts"}
          />
        </li>
      </ul>

      <ul className="mobile-navigation__menu">
        <li className="mobile-navigation__menu__item">
          <ItemLink title={"Articles"} link={"articles"} />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink title={"Our news"} link={"news"} />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink title={"Help"} link={"help"} />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink title={"Testimonials"} link={"testimonials"} />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink title={"Licence"} link={"licence"} />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink title={"Private Policy"} link={"policy"} />
        </li>
      </ul>
    </nav>
  );
};
