import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="__user">
      <Link to={"/"}>ثبت نام</Link> / <Link to={"/"}>ورود</Link>
    </div>
  );
};

export default User;
