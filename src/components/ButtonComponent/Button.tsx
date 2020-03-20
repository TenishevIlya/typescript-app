import React, { useState } from "react";
import ButtonStyles from "./index.style";
import classNames from "classnames";

interface IButton {
  title: string;
}

const Button: React.FC<IButton> = props => {
  const [aсcsess, setAccess] = useState("active");
  const { commonStyles, bigBtn } = ButtonStyles;
  const btnStyles = classNames(commonStyles, bigBtn);

  return <button className={btnStyles}>{props.title}</button>;
};

export default Button;
