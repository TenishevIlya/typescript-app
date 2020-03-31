import React, { useState } from "react";
import classnames from "classnames";

/* Interfaces */
import IButton from "./Button.interface";

/* Styles */
import ButtonStyles from "./Button.style";

const Button: React.FC<IButton> = props => {
  const [aсcsess, setAccess] = useState("active");

  const { commonStyles, bigBtn, disabledBtn } = ButtonStyles;

  const disabledBtnStyle = classnames(
    commonStyles,
    props.className,
    disabledBtn
  );

  return (
    <button
      type={props.type}
      disabled={props.disable}
      form={props.form}
      className={props.disable ? disabledBtnStyle : props.className}
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

export default Button;
