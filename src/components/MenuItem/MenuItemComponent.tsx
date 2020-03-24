import React from "react";

/* Interface */
import IMenuItem from "./IMenuItem";

/* Style */
import MenuItemStyle from "./MenuItem.style";

const MenuItem: React.FC<IMenuItem> = props => {
  const { wrapper, iconLogo, itemTitleStyle } = MenuItemStyle;
  return (
    <div className={wrapper}>
      <img src={props.icon} className={iconLogo} />
      <span className={itemTitleStyle}>{props.title}</span>
    </div>
  );
};

export default MenuItem;
