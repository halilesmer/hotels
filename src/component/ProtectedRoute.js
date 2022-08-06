import { useCallback, useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/authContext";
import Loading from "./Loading";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [testLoading, setTestLoading] = useState(false);
  const { loading, setLoading, user } = useContext(AuthContext);
  
//   const changeLoading = () => setLoading(() => false);
//   useEffect(() => {
// if(user){
//   setLoading(false)
// }else{setLoading(false)}
//   }, [user]);



  
  console.log("loading: ", loading);
  return (
    <div className="protected-route">
      {loading ? (
        <Loading />
      ) : user ? (
        children
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </div>
  );
};

export default ProtectedRoute;
