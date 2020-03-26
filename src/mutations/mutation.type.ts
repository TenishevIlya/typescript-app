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
