import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

interface Route {
  to: string;
  title: string;
  dropDown?: { to: string; title: string }[];
}

const LinkDropDown: FC<{ route: Route }> = ({ route }) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <li
      className="mx-4 px-4 p-drop-down"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link style={{ padding: "20px 0" }} to={route.to}>
        {route.title}
      </Link>
      {hover && <DropDown dropDown={route.dropDown} />}
    </li>
  );
};

export default LinkDropDown;
