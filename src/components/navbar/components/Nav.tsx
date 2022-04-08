import React, { Dispatch, FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../../data/routes";
import LinkDropDown from "./LinkDropDown";
import "./../assets/nav.scss";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import classNames from "classnames";
import Logo from "./Logo";
import useClickOutSide from "../../../hooks/useClickOutSide";
interface Route {
  to: string;
  title: string;
  dropDown?: { to: string; title: string }[];
  icon: JSX.Element;
}
interface Props {
  menu: boolean;
  setMenu: Dispatch<React.SetStateAction<boolean>>;
}

const Nav: FC<Props> = ({ menu, setMenu }) => {
  const { width } = useWindowDimensions();
  const handler = useClickOutSide(() => setMenu(false));
  const { pathname } = useLocation();
  return (
    <nav
      className={classNames("nav", {
        "menu-responsiv": width < 768,
        active: menu,
      })}
      ref={handler}
    >
      {width < 768 && (
        <div className="head text-center my-16">
          <Logo />
          <hr />
        </div>
      )}
      <ul className="d-flex">
        {routes.map((route: Route, index: number) => {
          if (route.dropDown) {
            return <LinkDropDown route={route} key={index} />;
          } else {
            return (
              <li className="mx-2 px-4 py-8 d-flex j-c-b a-i-c" key={index}>
                {width < 768 && route.icon}
                <Link
                  to={route.to}
                  className={classNames({
                    "mx-8": width < 768,
                    "text-light": pathname === "/" && width > 769,
                  })}
                  style={{ flexGrow: 1 }}
                >
                  {route.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Nav;
