import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

export default ({ children }) => {
  const prevAuth = window.localStorage.getItem("isAuthenticated") || false;

  const [isAuthenticated, setIsAuthenticated] = useState(prevAuth);

  useEffect(() => {
    window.localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated, setIsAuthenticated]);

  const defaultContext = {
    isAuthenticated,
    setIsAuthenticated,
  };

  return (
    <AuthContext.Provider value={defaultContext}>
      {children}
    </AuthContext.Provider>
  );
};
