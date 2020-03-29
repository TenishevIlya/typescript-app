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

  console.log(data);

  return (
    <div className={ProcessListStyle}>
      {/* {data?.processList.map(process => {
        return (
          <ProcessListItem
            id={process.processList.id}
            name={process.processList.name}
            numberOfExecutions={process.processList.numberOfExecutions}
            averageLeadTime={process.processList.averageLeadTime}
            averageActiveTime={process.processList.averageLeadTime}
            employeesInvolvedProcess={
              process.processList.employeesInvolvedProcess
            }
            numberOfScenarios={process.processList.numberOfScenarios}
            start={process.processList.start}
            end={process.processList.end}
            loading={process.processList.loading}
          />
        );
      })} */}
      {data?.processList.map(process => {
        return <ProcessListItem />;
      })}
      {/* <ProcessListItem /> */}
    </div>
  );
};

export default ProcessContainer;
