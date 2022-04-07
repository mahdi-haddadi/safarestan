import React, { FC, ReactNode } from "react";
import CSS from "csstype";
import "./button.scss";
interface Props {
  onClick?: () => void;
  className?: string;
  style?: CSS.Properties;
  children: ReactNode;
}
const Button: FC<Props> = ({ onClick, className, style, children }) => {
  return (
    <button className={`btn ${className}`} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
