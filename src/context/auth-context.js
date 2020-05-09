import React from "react";

const authContext = React.createContext({
  isAuthenticated: false,
  authenticateHandler: () => {},
});

export default authContext;
