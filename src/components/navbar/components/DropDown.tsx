import React from "react";
import { Link } from "react-router-dom";
import "./../assets/drop-down.scss";
interface Route {
  to: string;
  title: string;
  dropDown?: { to: string; title: string }[];
}
const DropDown = ({ dropDown }: any) => {
  return (
    <ul className="drop-down">
      {dropDown.map((route: Route, index: number) => {
        return (
          <li key={index} className={"item pr-4 py-8"}>
            <Link to={route.to}>{route.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DropDown;
