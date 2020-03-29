import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

/* Components */
import Header from "../../components/HeaderComponent/Header";

/* Img */
import LinkLogo from "../../img/stroke.svg";

/* Style */
import HeaderStyles from "../../components/HeaderComponent/Header.style";
import ProcessMapLinkStyle from "./ProcessMapLink.style";

const ProcessMapLink: React.FC = () => {
  const { common, processMapLink } = HeaderStyles;
  const { commonLink } = ProcessMapLinkStyle;

  const linkHeaderStyle = classnames(common, processMapLink);

  return (
    <div className={commonLink}>
      <Header title="На карту процессов" className={linkHeaderStyle} />
      <img src={LinkLogo}></img>
    </div>
  );
};

export default ProcessMapLink;
