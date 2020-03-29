import React from "react";
import classnames from "classnames";

/* Interface */
import { IProcessDate } from "./ProcessDate.interface";

/* Styles */
import ProcessDateStyles from "./ProcessDate.style";
import ProcessInfoPointStyle from "../ProcessInfoPoint/ProcessInofPoint.style";

const ProcessDate: React.FC<IProcessDate> = props => {
  const { commonProcessDate, dateColor, blockPart } = ProcessDateStyles;
  const { captionStyle } = ProcessInfoPointStyle;

  const titleStyles = classnames(captionStyle, blockPart);
  const dateStyles = classnames(captionStyle, dateColor);

  return (
    <div className={commonProcessDate}>
      <span className={titleStyles}>{props.title}</span>
      <span className={dateStyles}>{props.date}</span>
    </div>
  );
};

export default ProcessDate;
