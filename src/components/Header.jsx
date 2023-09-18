import React from 'react'
import Logo from "../img/logo.svg"

export default function Header() {
  return (
    <>
    <div className="filter"></div>
    <div className="mobile-slider">
        <div className="mobile-slider-top">
          <i className="fas fa-times close-menu"></i>
        </div>

        <ul className="mobile__list">
            <li className="mobile__item"><a href="#home" className="nav__link">Home</a></li>
            <li className="mobile__item"><a href="#about" className="nav__link">About</a></li>
            <li className="mobile__item"><a href="#offers" className="nav__link">Offers</a></li>
            <li className="mobile__item"><a href="#services" className="nav__link">Services</a></li>
        </ul>

    </div>

    <nav className="nav">

        <div className="nav__inner">
            
            <a href="./index.html" className="nav__logo">
                <img className="nav__img" src={Logo} alt="Apple"/>
            </a>

            <ul className="nav__list">
                <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                <li className="nav__item"><a href="#offers" className="nav__link">Offers</a></li>
                <li className="nav__item"><a href="#services" className="nav__link">Services</a></li>
            </ul>

            <form action="" className="form">
                <input className="help" type="search" placeholder="How can we help you?"/>
            </form>

            <div className="menu">
              <rect className="burger-top"></rect>
              <rect className="burger-mid"></rect>
              <rect className="burger-bot"></rect>
            </div>
            
        </div>

    </nav>
    </>
  );
}
