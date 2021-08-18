import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ component: Component, ...otherProps }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...otherProps}
      render={(props) =>
        isAuthenticated === "true" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
