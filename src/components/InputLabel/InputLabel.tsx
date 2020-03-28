import React from "react";

/* Interfaces */
import { IInputLabelProps } from "./InputLabel.interface";

/* Style */
import InputLabelStyle from "./InputLabel.style";

const InputLabel: React.FC<IInputLabelProps> = props => {
  return <span className={InputLabelStyle}>{props.title}</span>;
};

export default InputLabel;
