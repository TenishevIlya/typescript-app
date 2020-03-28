import React from "react";

/* Interface */
import IMenuItem from "./IMenuItem";

/* Style */
import MenuItemStyle from "./MenuItem.style";

import { CHANGE_PROFILE_CHILDREN } from "../../store/actions/actions";
import store from "../../store/index.store";

const MenuItem: React.FC<IMenuItem> = props => {
  const { wrapper, iconLogo, itemTitleStyle } = MenuItemStyle;
  return (
    <div
      className={wrapper}
      onClick={() =>
        store.dispatch(CHANGE_PROFILE_CHILDREN(props.reducerAction))
      }
    >
      <img src={props.icon} className={iconLogo} />
      <span className={itemTitleStyle}>{props.title}</span>
    </div>
  );
};

export default MenuItem;
