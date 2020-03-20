import React, { useState } from "react";
import Logo from "../../img/proceset_logo.svg";
import UnAuthorizedLayoutStyles from "./index.style";

const { layoutBackground, logo, formContainer } = UnAuthorizedLayoutStyles;

interface IUnAuthorizedLayoutProps {}

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
