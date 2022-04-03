import React from "react";
import Logo from "./components/Logo";
import "./assets/navbar.scss";
import User from "./components/User";
import Nav from "./components/Nav";
const Navbar = () => {
  return (
    <div className="navbar px-8 d-flex j-c-b a-i-c">
      <Logo />
      <Nav />
      <User />
    </div>
  );
};

export default Navbar;
