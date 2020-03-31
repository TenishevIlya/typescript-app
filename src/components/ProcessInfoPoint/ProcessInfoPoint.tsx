import React from "react";
import classnames from "classnames";

/* Components */
import Header from "../HeaderComponent/Header";

/* Styles */
import ProcessInfoPointStyle from "./ProcessInofPoint.style";
import HeaderStyles from "../HeaderComponent/Header.style";

/* Interface */
import { IProcessInfoPoint } from "./ProcessInfoPoint.interface";

const ProcessInfoPoint: React.FC<IProcessInfoPoint> = props => {
  const {
    commonPoint,
    captionStyle,
    logoAndHeader,
    logoStyle,
    topItemBlock
  } = ProcessInfoPointStyle;
  const { common, processInfoHeaderStyle } = HeaderStyles;

  const infoPointHeader = classnames(common, processInfoHeaderStyle);
  const topBlockStyle = classnames(commonPoint, topItemBlock);

  return (
    <div className={props.isTop ? topBlockStyle : commonPoint}>
      <div className={logoAndHeader}>
        <img src={props.logo} className={logoStyle} alt="Info point logo" />
        <Header title={props.header} className={infoPointHeader} />
      </div>
      <span className={captionStyle}>{props.explanation}</span>
    </div>
  );
};

export default ProcessInfoPoint;
