import React from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { BiLogOut } from "react-icons/bi";

const User = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="__user">
      {width > 768 ? (
        <div>
          <Link to={"/"}>ثبت نام</Link> / <Link to={"/"}>ورود</Link>
        </div>
      ) : (
        <div className="d-flex j-c-c a-i-c">
          <span className="mx-4">ورود |</span>
          <BiLogOut color="#fff" size={"1.5rem"} />
        </div>
      )}
    </div>
  );
};

export default User;
