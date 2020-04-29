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
          title={<img src="/header/logo.svg" alt="logo" />}
          link={"//home"}
        />
      </div>
      <ul className="mobile-navigation__menu">
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"About me"}
            link={"signup"}
          />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"Relationships"}
            link={"signup"}
          />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink onClick={handleLinkClick} title={"Users"} link={"signup"} />
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
            link={"signup"}
          />
        </li>
      </ul>

      <ul className="mobile-navigation__menu">
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"How it works"}
            link={"signup"}
          />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"Partnership"}
            link={"signup"}
          />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink onClick={handleLinkClick} title={"Help"} link={"signup"} />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"Leave testimonial"}
            link={"signup"}
          />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"Contact us"}
            link={"signup"}
          />
        </li>
      </ul>

      <ul className="mobile-navigation__menu">
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"Articles"}
            link={"signup"}
          />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"Our news"}
            link={"signup"}
          />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink onClick={handleLinkClick} title={"Help"} link={"signup"} />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"Testimonials"}
            link={"signup"}
          />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"Licence"}
            link={"signup"}
          />
        </li>
        <li className="mobile-navigation__menu__item">
          <ItemLink
            onClick={handleLinkClick}
            title={"Private Policy"}
            link={"signup"}
          />
        </li>
      </ul>
    </nav>
  );
};
