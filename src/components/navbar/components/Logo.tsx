import React from "react";
import { Link } from "react-router-dom";
import "./../assets/logo.scss";
const Logo = () => {
  return (
    <div className="logo">
      <Link to={"/"}>
        <h1>
          <span className="__1">سفر</span>
          <span className="__2">ستان</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
