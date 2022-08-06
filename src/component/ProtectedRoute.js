import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/authContext";
import Loading from "./Loading";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [testLoading, setTestLoading] = useState(false);
  const { loading, setLoading, user } = useContext(AuthContext);

  const changeLoading = () => setTestLoading(()=> false);
  useEffect(() => {
    changeLoading();
  }, [user]);

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
