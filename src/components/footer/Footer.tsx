import React from "react";
import { links } from "./../../data/footer-links";
import "./assets/footer.scss";
import Links from "./components/Links";
import SocialMedia from "./components/SocialMedia";

const Footer = () => {
  return (
    <footer className="footer py-16">
      <div className="content">
        <Links links={links} />
        <SocialMedia />
      </div>
      <div className="end">
        <p className="text-light">تمامی حقوق محفوظ است.©</p>
      </div>
    </footer>
  );
};

export default Footer;

// eslint-disable-next-line no-lone-blocks
{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#292f4f"
          fill-opacity="1"
          d="M0,192L60,208C120,224,240,256,360,245.3C480,235,600,181,720,160C840,139,960,149,1080,160C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg> */
}
