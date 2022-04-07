import React, { useState } from "react";
import Logo from "./components/Logo";
import "./assets/navbar.scss";
import User from "./components/User";
import Nav from "./components/Nav";
import useWindowDimensions from "./../../hooks/useWindowDimensions";
import { BiMenu, BiLogOut } from "react-icons/bi";
import { BsFillQuestionSquareFill, BsSearch } from "react-icons/bs";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { width } = useWindowDimensions();
  return (
    <div className="navbar px-8 py-8 d-flex">
      <div className="header-navbar w-100 d-flex j-c-b a-i-c">
        <Logo />
        <Nav menu={menu} setMenu={setMenu} />
        <User />
        {width < 768 && (
          <div className="menu" onClick={() => setMenu(!menu)}>
            <BiMenu size={"2rem"} color="#fff" />
          </div>
        )}
        {/* <Logo />

        {width >= 769 ? (
          <>
            <Nav />
            <User />
          </>
        ) : (
          <>
            <div className="about">
              <BsFillQuestionSquareFill size={"1.5rem"} color="#fff" />
            </div>
            <div className="menu" onClick={() => setMenu(!menu)}>
              <BiMenu size={"2rem"} color="#fff" />
            </div>
          </>
        )} */}
      </div>
      {/* {width < 768 && (
        <div className="footer-navbar">
          <div className="search">
            <input type="text" placeholder="جستوجو" />
            <span className="ico">
              <BsSearch color="#fff" />
            </span>
          </div>
          <div className="d-flex j-c-c a-i-c">
            <span className="mx-4">ورود |</span>
            <BiLogOut color="#fff" size={"1.5rem"} />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
