import React from "react";
import moment from "moment";

/* Components */
import ProcessListItem from "../ProcessListItem/ProcessListItem";

/* Style */
import ProcessListStyle from "./ProcessContainer.style";

/* Mutations */
import { useMutation, useQuery } from "@apollo/react-hooks";
import { TProcessListData } from "../../mutations/mutation.type";
import processListQuery from "../../mutations/processListQuery";
import ProcessListItemStyle from "../ProcessListItem/ProcessListItem.style";

const ProcessContainer: React.FC = () => {
  const { data } = useQuery<TProcessListData>(processListQuery);

  const convertDates = (value: number[]) => {
    return value.map(item => {
      return `${moment.unix(item).format("DD MMM YYYY")}`;
    });
  };

  const convertTime = (value: string[]) => {
    return value.map(item => {
      const durationTime = moment.duration(Number(item));
      return `${durationTime.hours()}ч ${durationTime.minutes()}м`;
    });
  };

  return (
    <div className={ProcessListStyle}>
      {data?.processList.map((process: any) => {
        const convertedTime = convertTime([
          process.averageLeadTime,
          process.averageActiveTime
        ]);
        const convertedDates = convertDates([
          process.start,
          process.end,
          process.loading
        ]);
        return (
          <ProcessListItem
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
