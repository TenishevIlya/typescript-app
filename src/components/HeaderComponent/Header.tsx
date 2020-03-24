import React, { useState } from "react";

/* Interface */
import IHeaderProps from "./Header.interface";

const Header: React.FC<IHeaderProps> = props => {
  const [headerTitle, setHeaderTitle] = useState("");

  return <span className={props.className}>{props.title}</span>;
};

export default Header;
