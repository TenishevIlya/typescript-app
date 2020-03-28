export interface ILogInMutatonProps<> {
  email: any;
  password: any;
}

export interface ILogInMutation<User> {
  login: {
    user: User;
    token: string;
  };
}

export interface IUser {
  id: number;
  firstName: string;
  secondName: string;
  email: string;
}

export interface ISignUpMutation {
  signUp: {
    firstName: string;
    secondName: string;
    email: string;
    password: string;
  };
}

export interface ISignUpValues {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
}

export type TProcessListValues = {
  processList: {
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
  };
};

export interface IEditUserData<User> {
  editUser: User;
}

export interface IEditUserValues {
  id: number;
  email: string;
  firstName: string;
  secondName: string;
  password: string;
}

export type TProcessListData = { processList: TProcessListValues[] };
