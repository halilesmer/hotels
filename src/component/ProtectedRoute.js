import { AuthContext } from "../context/authContext";
import Loading from "./Loading";
import { Navigate, } from "react-router-dom";
import { useContext, } from "react";

// import { AuthContext } from "./context/authContext.js";

const ProtectedRoute = ({children}) => {
    // const navigate= useNavigate()
    const {loading, user} = useContext(AuthContext);
    // const isAuth = useIsAuthenticated();
   
 console.log('loading, user :>> ', loading, user);


  return (
    // <div className="protected-route">
    //   {loading ? (
    //    <Loading/>
       
    //   ) : user ? (
    //     children
    //   ) : (
    //     <Navigate to="/" replace={true} />
    //   )}
    // </div>
    <div>
      {loading ? <p>loading</p> : user ? children : <Navigate to="/"/>}
    </div>
  );
}

export default ProtectedRoute