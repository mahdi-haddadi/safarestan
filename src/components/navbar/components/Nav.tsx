import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../data/routes";
import LinkDropDown from "./LinkDropDown";
import './../assets/nav.scss'

interface Route {
  to: string;
  title: string;
  dropDown?: { to: string; title: string }[];
}

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="d-flex">
        {routes.map((route: Route, index: number) => {
          if (route.dropDown) {
            return (
              <LinkDropDown route={route} key={index} />
            );
          } else {
            return (
              <li className="mx-4 px-4" key={index}>
                <Link to={route.to}>{route.title}</Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Nav;
