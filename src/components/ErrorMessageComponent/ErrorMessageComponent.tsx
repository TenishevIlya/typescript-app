import React from "react";

/* Style */
import ErrorMessageStyle from "./ErrorMessage.style";

/* Interfaces */
import { IErrorMessageProps } from "./ErrorMessage.interface";

const ErrorMessageComponent: React.FC<IErrorMessageProps> = props => {
  const { common, message, logo } = ErrorMessageStyle;
  return (
    <div className={common}>
      <div className={logo}>
        <svg
          width="47"
          height="42"
          viewBox="0 0 47 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.7174 36.7497L25.2318 2.99975C24.462 1.6664 22.5375 1.6664 21.7677 2.99975L2.28208 36.7497C1.51231 38.0831 2.47459 39.7497 4.01414 39.7497H42.9853C44.5249 39.7497 45.4872 38.0831 44.7174 36.7497ZM26.9638 1.99975C25.4242 -0.666908 21.5752 -0.666908 20.0356 1.99975L0.550025 35.7497C-0.989525 38.4164 0.934913 41.7497 4.01414 41.7497H42.9853C46.0646 41.7497 47.989 38.4164 46.4494 35.7497L26.9638 1.99975ZM25.9996 33.1598C25.9996 34.176 25.1042 34.9997 23.9996 34.9997C22.895 34.9997 21.9996 34.176 21.9996 33.1598C21.9996 32.1435 22.895 31.3198 23.9996 31.3198C25.1042 31.3198 25.9996 32.1435 25.9996 33.1598ZM23.9997 11.9997C22.8951 11.9997 21.9997 12.8952 21.9997 13.9997V27.4798C21.9997 28.5843 22.8951 29.4798 23.9997 29.4798C25.1043 29.4798 25.9997 28.5843 25.9997 27.4798V13.9997C25.9997 12.8952 25.1043 11.9997 23.9997 11.9997Z"
            fill="red"
          />
        </svg>
      </div>
      <span className={message}>{props.message}</span>
    </div>
  );
};

export default ErrorMessageComponent;
