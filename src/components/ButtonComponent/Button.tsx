import React, { useState } from "react";
import classNames from "classnames";

/* Styles */
import ButtonStyles from "./Button.style";

/* Interfaces */
import IButton from "./Button.interface";

const Button: React.FC<IButton> = props => {
  const [aсcsess, setAccess] = useState("active");
  const { commonStyles, bigBtn } = ButtonStyles;
  const btnStyles = classNames(commonStyles, bigBtn);

  return (
    <button disabled className={btnStyles}>
      {props.title}
    </button>
  );
};

export default Button;
