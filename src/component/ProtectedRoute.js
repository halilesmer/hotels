import { AuthContext } from "../context/authContext";
import { Navigate, } from "react-router-dom";
import { useContext } from "react";
// import { AuthContext } from "./context/authContext.js";
import useIsAuthenticated from "./useIsAuthenticated";

const ProtectedRoute = ({children}) => {
    // const navigate= useNavigate()
    const {loading, user} = useContext(AuthContext);
    // const isAuth = useIsAuthenticated();
    
  return (
    <div className="protected-route">{loading ? <p>...loading </p>: user ? children :  <Navigate to="/" replace={true} />}</div>
  
  );
}

export default ProtectedRoute