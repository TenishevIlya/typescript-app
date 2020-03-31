import React from "react";

/* Img */
import MenuWhite from "../../img/Union.svg";

/* Component */
import MenuHeader from "../../components/MenuHeader/MenuHeader";
import Menu from "../Menu/Menu";

/* Styles */
import SidebarStyles from "./Sidebar.style";
import ProfileLayoutStyles from "../../layouts/Profile/Profile.style";
import MenuHeaderStyles from "../../components/MenuHeader/MenuHeader.style";

/* Interfaces */
import ISidebarState from "../SidebarComponent/Sidebar.interface";

const Sidebar: React.FC<ISidebarState> = props => {
  const { common, unUsePart, menuPart } = SidebarStyles;
  const { headerSideMenuTitle } = ProfileLayoutStyles;
  const { sidebarMenuHeader } = MenuHeaderStyles;

  return (
    <div className={common}>
      <div className={menuPart}>
        <div className={sidebarMenuHeader}>
          <MenuHeader
            icon={MenuWhite}
            title="proceset"
            currentTitleClass={headerSideMenuTitle}
            action={props.action}
          />
        </div>
        <Menu action={props.action} />
      </div>
      <div className={unUsePart} onClick={props.action}></div>
    </div>
  );
};

export default Sidebar;
