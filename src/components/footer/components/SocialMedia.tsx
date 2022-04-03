import React from "react";
import Logo from "../../navbar/components/Logo";
import {
  BsFillRssFill,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import "./../assets/social-media.scss";
const SocialMedia = () => {
  return (
    <div className="social-media text-center">
      <Logo />
      <p className="text-light my-4">سفر به دور ایران با </p>
      <div className="network">
        <BsInstagram color="#ecf0f1" size={20} style={{ margin: "0 10px" }} />
        <BsTwitter color="#ecf0f1" size={20} style={{ margin: "0 10px" }} />
        <BsYoutube color="#ecf0f1" size={20} style={{ margin: "0 10px" }} />
        <BsFillRssFill color="#ecf0f1" size={20} style={{ margin: "0 10px" }} />
      </div>
      <div className="my-16">
        <img
          src="./images/download-android-app.svg"
          alt="download-android-app"
        />
      </div>
    </div>
  );
};

export default SocialMedia;
