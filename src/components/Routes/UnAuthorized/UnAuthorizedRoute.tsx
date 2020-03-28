import React from "react";
import { Route, useLocation } from "react-router-dom";

/* Containers */
import LogIn from "../../../containers/LogIn/LogIn";
import Registrate from "../../../containers/Registrate/Registrate";

/* Interface */
import IUnAuthorizedRoute from "./UnAuthorizedRoute.interface";

const UnAuthorizedRoute: React.FC<IUnAuthorizedRoute> = props => {
  const location = useLocation();

  return (
    <Route path={props.path} exact={true}>
      {location.pathname === "/" ? <LogIn /> : <Registrate />}
    </Route>
  );
};

export default UnAuthorizedRoute;
