export interface ILogInMutatonProps<> {
  email: any;
  password: any;
}

export interface ILogInMutation<IUser> {
  login: {
    user: IUser;
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

export interface ICurrentUser {
  currentUser: IUser;
}

export interface ISignUpValues {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
}

export type TProcessListValues = {
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

export type TProcessListData = {
  processList: TProcessListValues[];
};

export type TEditUserData<User> = {
  editUser: User;
};

export type TEditUserValues = {
  id: number | undefined;
  email: string;
  firstName: string;
  secondName: string;
  password: string;
};
