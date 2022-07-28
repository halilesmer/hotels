import { Navigate, useNavigate } from "react-router-dom";
import React, { useContext } from "react";

import { AuthContext } from "./context/authContext.js";
import useIsAuthenticated from "./useIsAuthenticated.js";

const ProtectedRoute = ({children}) => {
    console.log("children: ", children);
    const navigate= useNavigate()
    const {user} = useContext(AuthContext);
    const isAuth = useIsAuthenticated();
    
  return (
    <div>{isAuth ? children : <Navigate to="/" replace={true} />}</div>
  );
}

export default ProtectedRoute