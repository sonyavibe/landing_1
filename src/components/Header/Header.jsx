import React from "react";
import "./header.css";



const Header = () => {
  return (
  <header className="header">
    <div className="header__container">
      <a href="#home" className="header__logo"></a>
      <span className="header__phone">+7 (495) 495-49-54</span>
      <i class='bx bx-phone phone__icon'></i>
    </div>
  </header>
  );
}

export default Header