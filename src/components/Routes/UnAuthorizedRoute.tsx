import React from "react";
import { Route, useLocation } from "react-router-dom";
import UnAuthorizedLayout from "../../layouts/UnAuthorized/UnAuthorized";
import LogIn from "../../containers/LogIn/LogIn";
import Registrate from "../../containers/Registrate/Registrate";
import AuthorizedRoute from "./AuthorizedRoute";

interface IUnAuthorizedRoute {
  path: string;
}

const UnAuthorizedRoute: React.FC<IUnAuthorizedRoute> = () => {
  const location = useLocation();

  // if (location.pathname === "/") {
  //   return (
  //     <Route>
  //       <UnAuthorizedLayout>
  //         <LogIn />
  //       </UnAuthorizedLayout>
  //     </Route>
  //   );
  // } else if (location.pathname === "/registration") {
  //   return (
  //     <Route>
  //       <UnAuthorizedLayout>
  //         <Registrate />
  //       </UnAuthorizedLayout>
  //     </Route>
  //   );
  // }

  return (
    <Route exact component={UnAuthorizedRoute}>
      <UnAuthorizedLayout>
        {location.pathname === "/" ? <LogIn /> : <Registrate />}
      </UnAuthorizedLayout>
    </Route>
  );
};

export default UnAuthorizedRoute;
