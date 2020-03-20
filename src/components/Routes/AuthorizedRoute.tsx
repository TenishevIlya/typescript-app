import React from "react";
import { Route, useLocation } from "react-router-dom";
import ProfileLayout from "../../layouts/Profile/Profile";

interface IAuthorizedRoute {
  path: string;
}

const AuthorizedRoute: React.FC<IAuthorizedRoute> = () => {
  const location = useLocation();

  console.log(location.pathname);

  return <Route exact component={ProfileLayout}></Route>;
};

export default AuthorizedRoute;
