import React from "react";
import { Link, useLocation } from "react-router-dom";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { BiLogOut } from "react-icons/bi";
import classNames from "classnames";

const User = () => {
  const { width } = useWindowDimensions();
  const { pathname } = useLocation();
  return (
    <div className="__user">
      {width > 768 ? (
        <div>
          <Link
            to={"/"}
            className={classNames({ "text-light": pathname === "/" })}
          >
            ثبت نام
          </Link>{" "}
          {" | "}
          <Link
            to={"/"}
            className={classNames({ "text-light": pathname === "/" })}
          >
            ورود
          </Link>
        </div>
      ) : (
        <div className="d-flex j-c-c a-i-c">
          <span
            className={classNames("mx-4", { "text-light": pathname === "/" })}
          >
            ورود |
          </span>
          <BiLogOut color="#fff" size={"1.5rem"} />
        </div>
      )}
    </div>
  );
};

export default User;
