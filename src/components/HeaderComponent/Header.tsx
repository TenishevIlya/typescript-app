import React from "react";

/* Interface */
import IHeaderProps from "./Header.interface";

const Header: React.FC<IHeaderProps> = props => {
  return <span className={props.className}>{props.title}</span>;
};

export default Header;
