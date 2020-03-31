import React from "react";

/* Img */
import Logo from "../../img/proceset_logo.svg";

/* Styles */
import UnAuthorizedLayoutStyles from "./UnAuthorized.style";

const { layoutBackground, logo, formContainer } = UnAuthorizedLayoutStyles;

const UnAuthorizedLayout: React.FC = ({ children }) => {
  return (
    <div className={layoutBackground}>
      <img src={Logo} className={logo} alt="Proceset" />
      <div className={formContainer}>{children}</div>
    </div>
  );
};

export default UnAuthorizedLayout;
