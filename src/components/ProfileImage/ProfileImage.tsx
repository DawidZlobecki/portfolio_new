import React from "react";
import "./profileImage.scss";
import profileImage from "../../assets/img/profile/profile300.png";

const ProfileImage = () => {
  return (
    <div className="profileImageMainContainer">
      <div className="profileImageFakeContainer" />
      <div className="profileImageOverLayer" />
      <img src={profileImage} className="profileImage" />
    </div>
  );
};

export default ProfileImage;
