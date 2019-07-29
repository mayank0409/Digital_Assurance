import React from "react";
import "./header.scss";
import MenuIcon from "../../assets/menu.svg";

const Header = () => {
  return (
    <div className="header-container">
      <img src={MenuIcon} alt="menu_icon" />
      <div>Digital Assurance</div>
    </div>
  );
};

export default Header;
