import { useContext, useEffect, useState, } from "react";

import { AuthContext } from "../context/authContext";
import Loading from "./Loading";
import { Navigate, } from "react-router-dom";

// import { AuthContext } from "./context/authContext.js";

const ProtectedRoute = ({children}) => {
    // const navigate= useNavigate()
    const {loading,setLoading, user} = useContext(AuthContext);
    // const isAuth = useIsAuthenticated();
  //  const [loader2, setLoader2] = useState(true)
 console.log("loading, user :>> ",  user);

//  const setLoading = () => {
//   if (!user) {
//     setLoader2(false);
//   } else {
//     setLoader2(false);
//   }
//  }

//  useEffect(() => {
//    setLoading(false)
   
//  }, [user])
 
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
    // <div>
    //   {loader2 ? <p>loading</p> : user ? children : <Navigate to="/"/>}
    // </div>
  );
}

export default ProtectedRoute