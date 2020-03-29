import React, { Component, useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import UnAuthorizedRoute from "./components/Routes/UnAuthorized/UnAuthorizedRoute";
import AuthorizedRoute from "./components/Routes/Authorized/AuthorizedRoute";
import UnAuthorizedLayout from "./layouts/UnAuthorized/UnAuthorized";
import AuthorizedLayout from "./layouts/Profile/Profile";
import { Provider } from "react-redux";
import store from "./store/index.store";

import ApolloClient, { Operation } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hoc";

const client = new ApolloClient({
  uri: "http://localhost:4000/api",
  request: (operation: Operation) => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token} ` : ""
      }
    });
  }
});

//localStorage.clear();

const PrivateRouter = () => (
  <Route
    exact={true}
    render={() => (
      <>
        {localStorage.length !== 0 ? (
          <AuthorizedLayout>
            <AuthorizedRoute path="/profile" />
          </AuthorizedLayout>
        ) : (
          <Route path="/">
            <UnAuthorizedLayout>
              <UnAuthorizedRoute path="/" />
              <UnAuthorizedRoute path="/registration" />
            </UnAuthorizedLayout>
          </Route>
        )}
      </>
    )}
  />
);

interface IApp {}

const App: React.FC<IApp> = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          {/* <ProvidedComponent /> */}
          <PrivateRouter />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
