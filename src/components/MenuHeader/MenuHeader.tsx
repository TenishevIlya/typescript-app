import React, { useState } from "react";
import classNames from "classnames";

/* Components */
import Header from "../HeaderComponent/Header";

/* Img */
import MenuLogo from "../../img/menu.svg";

/* Styles */
import ProfileLayoutStyles from "../../layouts/Profile/Profile.style";
import MenuHeaderStyles from "./MenuHeader.style";

/* Interfaces */
import IMenuHeaderProps from "./MenuHeader.interface";

const MenuHeader: React.FC<IMenuHeaderProps> = props => {
  const { common, icon } = MenuHeaderStyles;

  return (
    <div className={common} onClick={props.action}>
      <img src={props.icon} className={icon} />
      <Header title={props.title} className={props.currentTitleClass} />
    </div>
  );
};

export default MenuHeader;
