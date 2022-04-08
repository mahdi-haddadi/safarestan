import React, { useState } from "react";
import Logo from "./components/Logo";
import "./assets/navbar.scss";
import User from "./components/User";
import Nav from "./components/Nav";
import useWindowDimensions from "./../../hooks/useWindowDimensions";
import { BiMenu, BiSearch } from "react-icons/bi";
import { BsFillQuestionSquareFill } from "react-icons/bs";
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
      </div>
      <div className="footer-navbar">
        <div className="search">
          <span className="ico">
            <BiSearch color="#fff" />
          </span>
          <input type="text" placeholder="جستوجو" />
        </div>
        <div className="question">
          <BsFillQuestionSquareFill color="#fff" size={'1.5rem'} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
