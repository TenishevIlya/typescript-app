import React, { useState } from "react";

/* Img */
import Logo from "../../img/proceset_logo.svg";

/* Styles */
import UnAuthorizedLayoutStyles from "./UnAuthorized.style";

/* Interfaces */
import IUnAuthorizedLayoutProps from "./UnAuthorized.interface";

console.log(localStorage);

const { layoutBackground, logo, formContainer } = UnAuthorizedLayoutStyles;

const UnAuthorizedLayout: React.FC<IUnAuthorizedLayoutProps> = ({
  children
}) => {
  //const [currentUrl, setUrl] = useState("/"); //temorarily because we need redux

  return (
    <div className={layoutBackground}>
      <img src={Logo} className={logo} />
      <div className={formContainer}>{children}</div>
    </div>
  );
};

export default UnAuthorizedLayout;
