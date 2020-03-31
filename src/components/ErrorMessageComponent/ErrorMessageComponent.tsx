import React from "react";

/* Style */
import ErrorMessageStyle from "./ErrorMessageStyle";

/* Img */
import WarningLogo from "../../img/warning.svg";

/* Interfaces */
import { IErrorMessageProps } from "./ErrorMessage.interface";

const ErrorMessageComponent: React.FC<IErrorMessageProps> = props => {
  const { common, message, logo, oval, circle, triangle } = ErrorMessageStyle;
  return (
    <div className={common}>
      <div className={logo}>
        <div className={oval}></div>
        <div className={circle}></div>
      </div>
      {/* <div className={triangle}></div> */}
      <span className={message}>{props.message}</span>
    </div>
  );
};

export default ErrorMessageComponent;
