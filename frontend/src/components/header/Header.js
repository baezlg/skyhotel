import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../customHooks/customHooks";
import "./Header.scss";

const Header = () => {
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
        {" "}
        <span>Sky</span>hotel
      </Link>
      <nav className={toggleMenu ? "navbar active" : "navbar"}>
        <Link to="/" className="navbar__link">
          home
        </Link>
        <Link to="/rooms" className="navbar__link">
          rooms
        </Link>
        <Link to="/restaurant" className="navbar__link">
          restaurant
        </Link>
        <Link to="/gallery" className="navbar__link">
          gallery
        </Link>
        <Link to="/contact" className="navbar__link">
          contact
        </Link>
        <Link to="/about" className="navbar__link">
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
