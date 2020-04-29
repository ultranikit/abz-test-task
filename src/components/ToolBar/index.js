import React, { Fragment, useState } from "react";
import ItemLink from "../NavigationLink";
import { MobileNavbarToggleButton } from "../MobileNavbar/MobileNavbarToggleButton";
import { MobileNavbar, Backdrop } from "../";
import "./style.scss";

export const ToolBar = (props) => {
  const [mobNav, setMobNav] = useState(false);
  const menuClickHandle = () => setMobNav(!mobNav);
  const backdropClickHandle = () => setMobNav(false);

  return (
    <Fragment>
      {mobNav && <Backdrop backdropClickHandle={backdropClickHandle} />}
      <MobileNavbar show={mobNav} closeOnLinkClick={backdropClickHandle} />

      <header className="toolbar">
        <div className="container">
          <nav className="toolbar__navigation">
            <div className="toolbar__logo">
              <ItemLink
                title={<img src="/header/logo.svg" alt="" />}
                link={"/"}
              />
            </div>
            <div className="toolbar__navigation-items">
              <ul className="toolbar__navigation-items__menu">
                <li className="toolbar__navigation-items__menu__item">
                  <ItemLink title="About me" link={"about"} />
                </li>
                <li className="toolbar__navigation-items__menu__item">
                  <ItemLink title="Requirements" link={"requirements"} />
                </li>

                <li className="toolbar__navigation-items__menu__item">
                  <ItemLink title="Relationships" link={"relationships"} />
                </li>
                <li className="toolbar__navigation-items__menu__item">
                  <ItemLink title="Users" link={"users"} />
                </li>
                <li className="toolbar__navigation-items__menu__item">
                  <ItemLink title="Sign Up" link={"signup"} />
                </li>
              </ul>
            </div>
            <MobileNavbarToggleButton menuClickHandle={menuClickHandle} />
          </nav>
        </div>
      </header>
    </Fragment>
  );
};
