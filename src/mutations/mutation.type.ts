export interface LogInMutatonProps<> {
  email: string;
  password: string;
}

export interface LogInMutation<User> {
  login: {
    user: User;
    token: string;
  };
}

export interface User {
  id: number;
  firstName: string;
  secondName: string;
  email: string;
}

export interface SignUpMutation {
  signUp: {
    firstName: string;
    secondName: string;
    email: string;
    password: string;
  };
}

export interface SignUpValues {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
}
