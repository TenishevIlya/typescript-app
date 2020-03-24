import React, { Component } from "react";
import "./index.css";
import { BrowserRouter, Switch } from "react-router-dom";
import UnAuthorizedRoute from "./components/Routes/UnAuthorized/UnAuthorizedRoute";
import AuthorizedRoute from "./components/Routes/Authorized/AuthorizedRoute";
import UnAuthorizedLayout from "./layouts/UnAuthorized/UnAuthorized";
import AuthorizedLayout from "./layouts/Profile/Profile";
import { Provider } from "react-redux";
import store from "./store/index.store";

import ApolloClient, { gql, Operation } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hoc";

const client = new ApolloClient({
  uri: "http://localhost:4000/api",
  request: (operation: Operation) => {
    const token = localStorage.getItem("token");
    operation.setContext({
      header: {
        authorization: token ? `Bearer ${token} ` : ""
      }
    });
  }
});

// client.query({
//   query: gql`
//     query {
//       processList {
//         id
//         name
//       }
//     }
//   `
// });

interface IApp {}

const App: React.FC<IApp> = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {localStorage.length === 0 ? (
              <UnAuthorizedLayout>
                <UnAuthorizedRoute path="/" />
                <UnAuthorizedRoute path="/registration" />
              </UnAuthorizedLayout>
            ) : (
              <AuthorizedLayout>
                <AuthorizedRoute path="/profile" />
              </AuthorizedLayout>
            )}
          </Switch>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
    // <Provider store={store}>
    //   <BrowserRouter>
    //     <Switch>
    //       <UnAuthorizedLayout>
    //         <UnAuthorizedRoute path="/" />
    //         <UnAuthorizedRoute path="/registration" />
    //       </UnAuthorizedLayout>
    //       {/* <AuthorizedLayout>
    //         <AuthorizedRoute path="/profile" />
    //       </AuthorizedLayout> */}
    //     </Switch>
    //   </BrowserRouter>
    // </Provider>
    // <BrowserRouter>
    //   <Switch>
    //     <UnAuthorizedLayout>
    //       <UnAuthorizedRoute path="/" />
    //       <UnAuthorizedRoute path="/registration" />
    //     </UnAuthorizedLayout>
    //     {/* <AuthorizedLayout>
    //       <AuthorizedRoute path="/profile" />
    //     </AuthorizedLayout> */}
    //   </Switch>
    // </BrowserRouter>
  );
};

export default App;
