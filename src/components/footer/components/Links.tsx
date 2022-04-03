import React from "react";
import { Link } from "react-router-dom";
import "./../assets/links.scss";
const Links = ({ links }: any) => {
  return (
    <div className="links">
      {Object.values(links).map((links: any, index: number) => {
        return (
          <div key={index}>
            <ul className="list">
              {links.map((link: string, index: number) => {
                return (
                  <li key={index} className={'item my-8'}>
                    <Link to={link}>{link}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Links;
