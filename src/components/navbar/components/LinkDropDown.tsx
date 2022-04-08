import classNames from "classnames";
import React, { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import DropDown from "./DropDown";
import { BsFillCaretDownFill } from "react-icons/bs";
interface Route {
  to: string;
  title: string;
  dropDown?: { to: string; title: string }[];
  icon: JSX.Element;
}

const LinkDropDown: FC<{ route: Route }> = ({ route }) => {
  const [hover, setHover] = useState<boolean>(false);
  const { width } = useWindowDimensions();
  const { pathname } = useLocation();
  return (
    <li
      className="mx-2 px-4 py-8 d-flex j-c-b a-i-c p-drop-down"
      onMouseEnter={() => width > 768 && setHover(true)}
      onMouseLeave={() => width > 768 && setHover(false)}
      onClick={() => width < 767 && setHover(!hover)}
    >
      <div className="item d-flex j-c-c a-i-c">
        <span className="icon-drop-down">
          <BsFillCaretDownFill
            color={pathname === "/" && width > 769 ? "#fff" : "#8d91a3"}
          />
        </span>
        {width < 768 && route.icon}
        <Link
          style={{ flexGrow: 1 }}
          className={classNames({
            "mx-8": width < 768,
            "text-light": pathname === "/" && width > 769,
          })}
          to={route.to}
        >
          {route.title}
        </Link>
      </div>
      {hover && <DropDown dropDown={route.dropDown} />}
    </li>
  );
};

export default LinkDropDown;
