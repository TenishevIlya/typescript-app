import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch } from "react-router-dom";
import UnAuthorizedRoute from "./components/Routes/UnAuthorizedRoute";
import AuthorizedRoute from "./components/Routes/AuthorizedRoute";

//ReactDOM.render(<UnAuthorizedLayout />, document.getElementById("root"));
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <UnAuthorizedRoute path="/" />
      <UnAuthorizedRoute path="/registration" /> */}
      <AuthorizedRoute path="/profile" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
