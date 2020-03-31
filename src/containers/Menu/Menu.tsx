import React from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

/* Img */
import UserIcon from "../../img/User.svg";
import ProcessListLogo from "../../img/ProcessList.svg";

/* Component */
import MenuItem from "../../components/MenuItem/MenuItemComponent";
import Button from "../../components/ButtonComponent/Button";

/* Interface */
import IMenuProps from "./Menu.interface";

/* Styles */
import MenuStyle from "./Menu.style";
import ButtonStyles from "../../components/ButtonComponent/Button.style";

/* Apollo */
import { useQuery } from "@apollo/react-hooks";
import { ICurrentUser } from "../../mutations/mutation.type";
import currentUserQuery from "../../mutations/currentUserQuery";

const Menu: React.FC<IMenuProps> = props => {
  const { data } = useQuery<ICurrentUser>(currentUserQuery, {
    fetchPolicy: "network-only"
  });

  const { commonStyles, smallBtn } = ButtonStyles;

  const history = useHistory();
  const EditBtnStyle = classNames(commonStyles, smallBtn);

  const { common } = MenuStyle;
  return (
    <div className={common} onClick={props.action}>
      <MenuItem
        title={`${data?.currentUser.secondName} ${data?.currentUser.firstName}`}
        icon={UserIcon}
        reducerAction="SHOW_EDIT_PROFILE" // action forn changing profile layout content
      />
      <MenuItem
        title="Список процессов"
        icon={ProcessListLogo}
        reducerAction="SHOW_PROCESS_LIST" // action forn changing profile layout content
      />
      <Button
        title="Выйти"
        type="submit"
        className={EditBtnStyle}
        action={() => {
          localStorage.clear();
          history.push("/");
        }}
      />
    </div>
  );
};

export default Menu;
