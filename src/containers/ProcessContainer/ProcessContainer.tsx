import React from "react";

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

  console.log(data?.processList[0].id);

  return (
    <div className={ProcessListStyle}>
      {data?.processList.map((process: any) => {
        console.log(process);
        return (
          <ProcessListItem
            key={process.id + process.name}
            id={process.id}
            name={process.name}
            numberOfExecutions={process.numberOfExecutions}
            averageLeadTime={process.averageLeadTime}
            averageActiveTime={process.averageLeadTime}
            employeesInvolvedProcess={process.employeesInvolvedProcess}
            numberOfScenarios={process.numberOfScenarios}
            start={process.start}
            end={process.end}
            loading={process.loading}
          />
        );
      })}
    </div>
  );
};

export default ProcessContainer;
