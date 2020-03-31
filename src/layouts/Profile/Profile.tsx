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
import { ICurrentUser } from "../../mutations/mutation.type";

/* Queries */
import { useQuery } from "@apollo/react-hooks";
import currentUserQuery from "../../mutations/currentUserQuery";

/* Store */
import store from "../../store/index.store";

/* Support functions */
import { handleScrollStop } from "../../utils/scrollCase/scrollCase";

const ProfileLayout: React.FC = () => {
  const [sidebarState, setSidebarState] = useState(false);
  const [layoutContent, setLayoutContent] = useState("SHOW_EDIT_PROFILE");

  if (sidebarState) {
    document.body.style.overflow = "hidden";
  }

  // timer for hideScroll case
  // not sure if it is a goog practise
  let timer: any;

  const handleLayoutContent = () => {
    if (store.getState().setEditLayout === "SHOW_PROCESS_LIST") {
      setLayoutContent("SHOW_PROCESS_LIST");
    } else {
      setLayoutContent("SHOW_EDIT_PROFILE");
    }
  };

  const { data } = useQuery<ICurrentUser>(currentUserQuery, {
    fetchPolicy: "network-only"
  });

  const { header, main, headerMenuTitle, mainEditPart } = ProfileLayoutStyles;

  const editLayoutStyle = classnames(main, mainEditPart);

  return (
    <div
      onClick={() => {
        handleLayoutContent();
      }}
      onWheel={() => {
        // tried to put it into handleScrollActive
        // but works incorrectly, so it stays here
        if (sidebarState) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "unset";
          clearTimeout(timer);
          timer = setTimeout(handleScrollStop, 1500);
        }
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
        {layoutContent === "SHOW_EDIT_PROFILE" ? <EditUser /> : <ProcessList />}
      </div>
    </div>
  );
};

export default ProfileLayout;
