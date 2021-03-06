import React from "react";
import classnames from "classnames";

/* Components */
import Header from "../../components/HeaderComponent/Header";
import ProcessInfoPoint from "../../components/ProcessInfoPoint/ProcessInfoPoint";
import ProcessDate from "../../components/ProcessDate/ProcessDate";

/* Interfaces */
import { IProcessListItemProps } from "./ProcessListItem.interface";

/* Styles */
import ProcessListItemStyle from "./ProcessListItem.style";
import HeaderStyles from "../../components/HeaderComponent/Header.style";
import ProcessMapLink from "../../components/ProcessMapLink/ProcessMapLink";

/* Img */
import TimesDoneLogo from "../../img/spinner.svg";
import AveragePerform from "../../img/averagePerformTime.svg";
import AverageActiveTime from "../../img/averageActiveTime.svg";
import Employees from "../../img/employees.svg";
import Scenarios from "../../img/scenarios.svg";

const ProcessListItem: React.FC<IProcessListItemProps> = props => {
  const { commonItem, header, mainPart } = ProcessListItemStyle;
  const { common, processListItemHeader } = HeaderStyles;
  const headerTitleStyle = classnames(common, processListItemHeader);

  return (
    <div className={commonItem}>
      {/* Header */}
      <div className={header}>
        <Header title={props.name} className={headerTitleStyle} />
        <ProcessMapLink />
      </div>
      {/* Main content part */}
      <div className={mainPart}>
        <ProcessInfoPoint
          header={props.numberOfExecutions}
          logo={TimesDoneLogo}
          explanation="выполнено раз"
        />
        {/* inline style here because it is a small case*/}
        <div style={{ marginLeft: "5.5vw" }}>
          <ProcessInfoPoint
            header={props.averageLeadTime}
            isTop={true}
            logo={AveragePerform}
            explanation="среднее время выполнения"
          />
          <ProcessInfoPoint
            // added static percentages
            header={`${props.averageActiveTime} (22,04%)`}
            logo={AverageActiveTime}
            explanation="среднее активное время"
          />
        </div>
        <div>
          <ProcessInfoPoint
            header={`${props.employeesInvolvedProcess} сотрудни${props.employeesDec}`}
            isTop={true}
            logo={Employees}
            explanation="учавствует в процессе"
          />
          <ProcessInfoPoint
            header={`${props.numberOfScenarios} сценари${props.scenariosDec}`}
            logo={Scenarios}
            explanation="в процессе"
          />
        </div>
        <div>
          <ProcessDate title="Начало" date={props.start} />
          <ProcessDate title="Окончание" date={props.end} />
          <ProcessDate title="Загрузка" date={props.loading} />
        </div>
      </div>
    </div>
  );
};

export default ProcessListItem;
