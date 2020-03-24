import React from "react";

/* Img */
import UserIcon from "../../img/User.svg";
import ProcessListLogo from "../../img/ProcessList.svg";

/* Component */
import MenuItem from "../../components/MenuItem/MenuItemComponent";

/* Styles */
import MenuStyle from "./Menu.style";

const Menu: React.FC = () => {
  const { common } = MenuStyle;
  return (
    <div className={common}>
      <MenuItem title="Username" icon={UserIcon} />
      <MenuItem title="Список процессов" icon={ProcessListLogo} />
    </div>
  );
};

export default Menu;
