import React from "react";
import { Route, useLocation } from "react-router-dom";

/* Interface */
import IAuthorizedRoute from "./AuthorizedRoute.interface";

const AuthorizedRoute: React.FC<IAuthorizedRoute> = () => {
  return <Route exact={true}></Route>;
};

export default AuthorizedRoute;
