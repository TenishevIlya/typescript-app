export interface LogInMutatonProps<> {
  email: string;
  password: string;
}

export interface LogIn<User> {
  user: User;
  token: string;
}

export interface User {
  id: number;
  firstName: string;
  secondName: string;
  email: string;
}
