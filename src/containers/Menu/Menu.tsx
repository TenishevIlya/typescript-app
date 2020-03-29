import React from "react";

/* Img */
import UserIcon from "../../img/User.svg";
import ProcessListLogo from "../../img/ProcessList.svg";

/* Component */
import MenuItem from "../../components/MenuItem/MenuItemComponent";

/* Styles */
import MenuStyle from "./Menu.style";
import { useQuery } from "@apollo/react-hooks";
import { ICurrentUser } from "../../mutations/mutation.type";
import currentUserQuery from "../../mutations/currentUserQuery";

const Menu: React.FC = () => {
  const { data } = useQuery<ICurrentUser>(currentUserQuery, {
    fetchPolicy: "network-only"
  });
  const { common } = MenuStyle;
  return (
    <div className={common}>
      <MenuItem
        title={`${data?.currentUser.secondName} ${data?.currentUser.firstName}`}
        icon={UserIcon}
        reducerAction="SHOW_EDIT_PROFILE"
      />
      <MenuItem
        title="Список процессов"
        icon={ProcessListLogo}
        reducerAction="SHOW_PROCESS_LIST"
      />
    </div>
  );
};

export default Menu;
