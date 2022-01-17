import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__top">
        <div className="footer__about">
          <h3 className="heading-sm">ABOUT US</h3>
          <p className="footer__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            soluta nesciunt rem esse consectetur quos dolore et vitae ipsam?
            Iusto voluptatem ipsa iure accusantium doloribus neque eius quod
            similique amet.
          </p>
        </div>
        <div className="footer__menu">
          <h3 className="heading-sm">MENU</h3>
          <Link to="/" className="footer__link">
            <i className="fas fa-chevron-right"></i> Home
          </Link>
          <Link to="/rooms" className="footer__link">
            <i className="fas fa-chevron-right"></i> Rooms
          </Link>
          <Link to="/restaurant" className="footer__link">
            <i className="fas fa-chevron-right"></i> Restaurant
          </Link>
          <Link to="/gallery" className="footer__link">
            <i className="fas fa-chevron-right"></i> gallery
          </Link>
          <Link to="/contact" className="footer__link">
            <i className="fas fa-chevron-right"></i> contact
          </Link>
        </div>
        <div className="footer__contact">
          <h3 className="heading-sm">CONTACT</h3>
          <h4>10 (78) 273 3563</h4>
          <h4>info@ocheandeview.com</h4>
          <div className="footer__social">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        Copyright &copy;{new Date().getFullYear()} All rights reserved
      </div>
    </section>
  );
};

export default Footer;
