import { AuthContext } from "../context/authContext";
import  { useContext } from "react";

const useIsAuthenticated = () => {
  const { user } = useContext(AuthContext);
  const isAuthenticated = user !== null ? true : false;
  
  return isAuthenticated;
};

export default useIsAuthenticated;
