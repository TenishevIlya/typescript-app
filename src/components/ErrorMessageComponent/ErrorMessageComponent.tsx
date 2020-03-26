import React from "react";

/* Style */
import ErrorMessageStyle from "./ErrorMessageStyle";

/* Img */
import WarningLogo from "../../img/warning.svg";

/* Interfaces */
import { IErrorMessageProps } from "./ErrorMessage.interface";

const ErrorMessageComponent: React.FC<IErrorMessageProps> = props => {
  const { common, message, logo } = ErrorMessageStyle;
  return (
    <div className={common}>
      <img src={WarningLogo} className={logo} alt="warning" />
      <span className={message}>{props.message}</span>
    </div>
  );
};

export default ErrorMessageComponent;
