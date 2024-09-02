import React from "react";
import "./Header.scss";
import ProfileImage from "../ProfileImage/ProfileImage";

const Header = () => {
  return (
    <header className="header">
      <ProfileImage />
    </header>
  );
};

export default Header;
