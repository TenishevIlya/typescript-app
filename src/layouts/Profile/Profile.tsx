import React, { useState } from "react";
import classnames from "classnames";

/* Contaiers */
import EditUser from "../../containers/EditUser/EditUser";
import ProcessList from "../../containers/ProcessContainer/ProcessContainer";

/* Components */
import Sidebar from "../../containers/SidebarComponent/Sidebar";
import MenuHeader from "../../components/MenuHeader/MenuHeader";

/* Img */
import MenuLogo from "../../img/menu.svg";

/* Styles */
import ProfileLayoutStyles from "./Profile.style";

/* Interfaces */
import IProfileLayoutProps from "./Profile.inteface";
import { ICurrentUser } from "../../mutations/mutation.type";

/* Queries */
import { useQuery } from "@apollo/react-hooks";
import currentUserQuery from "../../mutations/currentUserQuery";

/* Store */
import store from "../../store/index.store";

const ProfileLayout: React.FC<IProfileLayoutProps> = () => {
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

  const { loading, data, error } = useQuery<ICurrentUser>(currentUserQuery, {
    fetchPolicy: "network-only"
  });

  const {
    header,
    main,
    headerMenuTitle,
    headerSideMenuTitle,
    mainEditPart
  } = ProfileLayoutStyles;

  const editLayoutStyle = classnames(main, mainEditPart);

  return (
    <div
      onClick={() => {
        handleLayoutContent();
      }}
    >
      {sidebarState ? (
        <Sidebar
          userName={`${data?.currentUser.secondName} ${data?.currentUser.firstName}.Редактирование`}
          action={() => setSidebarState(!sidebarState)}
        />
      ) : null}
      <div className={header}>
        <MenuHeader
          icon={MenuLogo}
          currentTitleClass={headerMenuTitle}
          action={() => setSidebarState(!sidebarState)}
          title="Menu"
        />
      </div>
      <div
        className={
          layoutContent === "SHOW_EDIT_PROFILE" ? editLayoutStyle : main
        }
      >
        {/* {store.getState().setEditLayout === "SHOW_EDIT_PROFILE" ? (
          <EditUser />
        ) : null} */}
        {layoutContent === "SHOW_EDIT_PROFILE" ? <EditUser /> : <ProcessList />}
      </div>
    </div>
  );
};

export default ProfileLayout;
