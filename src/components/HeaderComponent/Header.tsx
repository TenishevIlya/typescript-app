import React, { useState } from "react";

interface IHeaderProps {
  title: string;
  className: string;
}

const Header: React.FC<IHeaderProps> = props => {
  const [headerTitle, setHeaderTitle] = useState("");

  return <span className={props.className}>{props.title}</span>;
};

export default Header;
