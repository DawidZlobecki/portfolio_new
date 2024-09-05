import React from "react";
import "./Header.scss";
import Navigation from "../Navigation/Navigation";
import ProfileImage from "../ProfileImage/ProfileImage";

const Header = () => {
  return (
    <header className="header">
      <div className="nameContainer">
        <ProfileImage />
        <h2>Dawid Żłobecki</h2>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
