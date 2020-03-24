import React, { useState } from "react";
import classNames from "classnames";

/* Components */
import Header from "../../components/HeaderComponent/Header";
import Sidebar from "../../containers/SidebarComponent/Sidebar";
import MenuHeader from "../../components/MenuHeader/MenuHeader";

/* Img */
import MenuLogo from "../../img/menu.svg";

/* Styles */
import ProfileLayoutStyles from "./Profile.style";

/* Interfaces */
import IProfileLayoutProps from "./Profile.inteface";
import Menu from "../../containers/Menu/Menu";

const ProfileLayout: React.FC<IProfileLayoutProps> = ({ children }) => {
  const [sidebarState, setSidebarState] = useState(false);

  const {
    header,
    main,
    headerMenuTitle,
    headerSideMenuTitle
  } = ProfileLayoutStyles;
  //const CurrentHeaderStyle = classNames(headerMenuTitle);

  //console.log(sidebarState);
  console.log(sidebarState);

  return (
    <div>
      {sidebarState ? (
        <Sidebar action={() => setSidebarState(!sidebarState)} />
      ) : null}
      <div className={header}>
        <MenuHeader
          icon={MenuLogo}
          currentTitleClass={headerMenuTitle}
          action={() => setSidebarState(!sidebarState)}
          title="Menu"
        />
      </div>
      <div className={main}>{children}</div>
    </div>
  );
};

export default ProfileLayout;
