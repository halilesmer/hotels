import { Navigate, } from "react-router-dom";
// import { AuthContext } from "./context/authContext.js";
import useIsAuthenticated from "./useIsAuthenticated.js";

const ProtectedRoute = ({children}) => {
    // const navigate= useNavigate()
    // const {user} = useContext(AuthContext);
    const isAuth = useIsAuthenticated();
    
  return (
    <div>{isAuth ? children : <Navigate to="/" replace={true} />}</div>
  );
}

export default ProtectedRoute