import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";

const useAuth = () => {
  return localStorage.getItem("authenticated") === "true"; 
};

function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = useAuth();
  return isAuthenticated ? (
    <Component {...props} />
  ) : <Navigate to="/" />;
}

export default ProtectedRoute;