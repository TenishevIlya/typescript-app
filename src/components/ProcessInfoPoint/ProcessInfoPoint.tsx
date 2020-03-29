import React from "react";

/* Components */
import Header from "../HeaderComponent/Header";

/* Styles */
import ProcessInfoPointStyle from "./ProcessInofPoint.style";

/* Interface */
import { IProcessInfoPoint } from "./ProcessInfoPoint.interface";

const ProcessInfoPoint: React.FC<IProcessInfoPoint> = props => {
  const { commonPoint, pointExplanation } = ProcessInfoPointStyle;
  return (
    <div className={commonPoint}>
      <img src={props.logo}></img>
      <Header title="asd" className="" />
      <div>
        {/* <Header title="asd" className="" /> */}
        <span className={pointExplanation}>{props.explanation}</span>
      </div>
    </div>
  );
};

export default ProcessInfoPoint;
