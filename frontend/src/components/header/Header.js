import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useWindowSize } from "../../customHooks/customHooks";
import "./Header.scss";

const Header = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, height] = useWindowSize();

  useEffect(() => {
    window.onscroll = () => setToggleMenu(false);
    if (width > 768) {
      setToggleMenu(false);
    }
  }, [width]);

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        {""}
        <span>Sky</span>hotel
      </Link>
      <nav className={toggleMenu ? "navbar active" : "navbar"}>
        <Link
          to="/"
          className={path === " " ? "navbar__link active" : "navbar__link"}
        >
          home
        </Link>
        <Link
          to="/rooms"
          className={path === "rooms" ? "navbar__link active" : "navbar__link"}
        >
          rooms
        </Link>
        <Link
          to="/restaurant"
          className={
            path === "restaurant" ? "navbar__link active" : "navbar__link"
          }
        >
          restaurant
        </Link>
        <Link
          to="/gallery"
          className={
            path === "gallery" ? "navbar__link active" : "navbar__link"
          }
        >
          gallery
        </Link>
        <Link
          to="/contact"
          className={
            path === "contact" ? "navbar__link active" : "navbar__link"
          }
        >
          contact
        </Link>
        <Link
          to="/about"
          className={path === "about" ? "navbar__link active" : "navbar__link"}
        >
          about
        </Link>
      </nav>
      <div
        className={
          toggleMenu
            ? "fas fa-times header__menu-btn"
            : "fas fa-bars header__menu-btn"
        }
        onClick={() => setToggleMenu(!toggleMenu)}
      ></div>
    </header>
  );
};

export default Header;
