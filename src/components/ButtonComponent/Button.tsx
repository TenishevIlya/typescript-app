import React, { useState } from "react";
import classNames from "classnames";

/* Interfaces */
import IButton from "./Button.interface";

const Button: React.FC<IButton> = props => {
  const [aсcsess, setAccess] = useState("active");

  return (
    <button type={props.type} form={props.form} className={props.className}>
      {props.title}
    </button>
  );
};

export default Button;
