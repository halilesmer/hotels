import { AuthContext } from "../context/authContext";
import Loading from "./Loading";
import { Navigate, } from "react-router-dom";
import { useContext, } from "react";

// import { AuthContext } from "./context/authContext.js";

const ProtectedRoute = ({children}) => {
    // const navigate= useNavigate()
    const {loading, user} = useContext(AuthContext);
    // const isAuth = useIsAuthenticated();
   
 


  return (
    <div className="protected-route">
      {loading ? (
       <Loading/>
      ) : user ? (
        children
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </div>
  );
}

export default ProtectedRoute