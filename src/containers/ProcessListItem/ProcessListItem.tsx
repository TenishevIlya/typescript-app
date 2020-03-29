import React from "react";
import classnames from "classnames";

/* Components */
import Header from "../../components/HeaderComponent/Header";
import ProcesMapLink from "../../components/ProcessMapLink/ProcessMapLink";
import ProcessInfoPoint from "../../components/ProcessInfoPoint/ProcessInfoPoint";

/* Interfaces */
import { IProcessListItemProps } from "./ProcessListItem.interface";

/* Styles */
import ProcessListItemStyle from "./ProcessListItem.style";
import HeaderStyles from "../../components/HeaderComponent/Header.style";
import ProcessMapLink from "../../components/ProcessMapLink/ProcessMapLink";

/* Img */
import TimesDoneLogo from "../../img/spinner.svg";

const ProcessListItem = () => {
  const { commonItem, header, mainPart } = ProcessListItemStyle;
  const { common, processListItemHeader } = HeaderStyles;
  const headerTitleStyle = classnames(common, processListItemHeader);

  return (
    <div className={commonItem}>
      <div className={header}>
        <Header title="asasasasddsa" className={headerTitleStyle} />
        <ProcessMapLink />
      </div>
      <div className={mainPart}>
        <ProcessInfoPoint logo={TimesDoneLogo} explanation="adasasd" />
      </div>
    </div>
  );
};

export default ProcessListItem;
