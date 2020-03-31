import React from "react";
import { Route, useHistory } from "react-router-dom";

/* Containers */
import LogIn from "../../../containers/LogIn/LogIn";
import Registrate from "../../../containers/Registrate/Registrate";

/* Interface */
import IUnAuthorizedRoute from "./UnAuthorizedRoute.interface";

const UnAuthorizedRoute: React.FC<IUnAuthorizedRoute> = props => {
  const history = useHistory();

  return (
    <Route path={props.path} exact={true}>
      {history.location.pathname === "/" ? <LogIn /> : <Registrate />}
    </Route>
  );
};

export default UnAuthorizedRoute;
