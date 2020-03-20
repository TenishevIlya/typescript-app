import React, { useState } from "react";
import ProfileLayoutStyles from "./index.style";
import MenuLogo from "../../img/menu.svg";
import Header from "../../components/HeaderComponent/Header";

interface IProfileLayoutProps {}

const ProfileLayout: React.FC<IProfileLayoutProps> = ({ children }) => {
  const { header, main, headerMenuLogo } = ProfileLayoutStyles;
  //   const { common, registrateHeader } = HeaderStyles;
  //   const CurrentHeaderStyle = classNames(common, registrateHeader);

  return (
    <div>
      <div className={header}>
        <img src={MenuLogo} className={headerMenuLogo} />
        <Header title="Меню" />
      </div>
      <div className={main}></div>
    </div>
  );
};

export default ProfileLayout;
