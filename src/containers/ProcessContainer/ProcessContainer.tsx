import React from "react";

/* Components */
import ProcessListItem from "../ProcessListItem/ProcessListItem";

/* Style */
import ProcessListStyle from "./ProcessContainer.style";

/* Mutations */
import { useQuery } from "@apollo/react-hooks";
import { TProcessListData } from "../../mutations/mutation.type";
import processListQuery from "../../mutations/processListQuery";

/* ConvertationFuncs */
import {
  convertTime,
  convertDates,
  correctDeclension
} from "../../utils/dataConvertation/dataConvertation";

const ProcessContainer: React.FC = () => {
  const { data } = useQuery<TProcessListData>(processListQuery);

  return (
    <div className={ProcessListStyle}>
      {data?.processList.map((process: any) => {
        // employees correct declision
        const correctedEmpDec = correctDeclension(
          process.employeesInvolvedProcess,
          "employee"
        );
        // scenarios correct declision
        const correctedScenDec = correctDeclension(
          process.numberOfScenarios,
          "scenario"
        );
        //get correct time
        const convertedTime = convertTime([
          process.averageLeadTime,
          process.averageActiveTime
        ]);
        //get correct dates
        const convertedDates = convertDates([
          process.start,
          process.end,
          process.loading
        ]);
        return (
          <ProcessListItem
            employeesDec={correctedEmpDec}
            scenariosDec={correctedScenDec}
            key={process.id + process.name}
            id={process.id}
            name={process.name}
            numberOfExecutions={process.numberOfExecutions}
            averageLeadTime={convertedTime[0]}
            averageActiveTime={convertedTime[1]}
            employeesInvolvedProcess={process.employeesInvolvedProcess}
            numberOfScenarios={process.numberOfScenarios}
            start={convertedDates[0]}
            end={convertedDates[1]}
            loading={convertedDates[2]}
          />
        );
      })}
    </div>
  );
};

export default ProcessContainer;
