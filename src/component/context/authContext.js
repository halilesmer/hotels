import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  
  const value = {
    user,
    setUser,
  };
  
  
  console.log("user.length: ", user && user.length);
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
