import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("authenticated") === "true"; 
};

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default ProtectedRoute;