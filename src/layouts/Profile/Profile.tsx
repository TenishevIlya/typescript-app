import React, { useState, useEffect } from "react";
import classNames from "classnames";

/* Contaiers */
import EditUser from "../../containers/EditUser/EditUser";

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
import {
  TProcessListData,
  ILogInMutation,
  IUser,
  ILogInMutatonProps
} from "../../mutations/mutation.type";

/* Queries */
import processListQuery from "../../mutations/processListQuery";
import { useQuery, useMutation } from "@apollo/react-hooks";
import loginMutation from "../../mutations/loginMutation";
import currentUserQuery from "../../mutations/currentUserQuery";

/* Store */
import store from "../../store/index.store";

const ProfileLayout: React.FC<IProfileLayoutProps> = ({ children }) => {
  const [sidebarState, setSidebarState] = useState(false);
  const [layoutContent, setLayoutContent] = useState("SHOW_EDIT_PROFILE");

  //think about it
  const handleLayoutContent = () => {
    if (store.getState().setEditLayout === "SHOW_PROCESS_LIST") {
      setLayoutContent("SHOW_PROCESS_LIST");
    } else {
      setLayoutContent("SHOW_EDIT_PROFILE");
    }
  };

  // const { loading, data, error } = useQuery<TProcessListData>(
  //   currentUserQuery,
  //   { fetchPolicy: "network-only" }
  // );

  // console.log(data);

  const { loading, data, error } = useQuery<TProcessListData>(
    processListQuery,
    {
      fetchPolicy: "network-only"
    }
  );
  console.log(data);

  const [logIn] = useMutation<ILogInMutation<IUser>, ILogInMutatonProps>(
    loginMutation
  );

  const {
    header,
    main,
    headerMenuTitle,
    headerSideMenuTitle
  } = ProfileLayoutStyles;

  return (
    <div
      onClick={() => {
        handleLayoutContent();
      }}
    >
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
      <div className={main}>
        {/* {store.getState().setEditLayout === "SHOW_EDIT_PROFILE" ? (
          <EditUser />
        ) : null} */}
        {layoutContent === "SHOW_EDIT_PROFILE" ? <EditUser /> : null}
      </div>
    </div>
  );
};

export default ProfileLayout;
