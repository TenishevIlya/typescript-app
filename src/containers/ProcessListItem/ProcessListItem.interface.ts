export interface IProcessListItemProps {
  id: string;
  name: string;
  numberOfExecutions: number;
  averageLeadTime: string;
  averageActiveTime: string;
  employeesInvolvedProcess: number;
  numberOfScenarios: number;
  start: string;
  end: string;
  loading: string;
  scenariosDec: string;
  employeesDec: string;
}
