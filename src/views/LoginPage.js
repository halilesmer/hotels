import { Alert, Box, Divider, Stack, Typography } from "@mui/material";

import { Container } from "@mui/system";
import { Link } from "react-router-dom";
// import LoginRegisterBtn from '../component/LoginRegisterBtn';
import LoginForm from "../component/LoginForm";
import LoginRegisterBtn from "../component/Buttons/LoginRegisterBtn";
import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/authContext";
import { auth } from "../config/config";
import { AppContext } from "../context/appContext";
import AuthErrorPage from "../component/AuthErrorAlert";

const LoginPage = () => {
  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login, pwError, setPwError } = useContext(AuthContext);
  const { focused } = useContext(AppContext);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);


  const handleSubmitLoginClick = (e) => {
    // console.log("email: ", e);
    login(email, password);
  };

  /* ---- closes alert for password error ------ */
  const handleClose = () => {
    setPwError(false);
  };
  
  useEffect(() => {
    handleClose();
  }, [focused]);

  
  return (
    <Container
      id="loginCon"
      component="div"
      align="center"
      style={{ marginTop: "5rem" }}
    >
      <Typography
        align="center"
        variant="h3"
        component="h1"
        style={{ margin: "auto", display: "inline" }}
      >
        Login
      </Typography>
      {/* --------- Password alert -------- */}
      {pwError && (
        <AuthErrorPage
          handleclose={handleClose}
          alertTxt="Authentication failed. Please check your email or password."
        />
      )}

      <LoginForm
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        email={email}
        password={password}
        handleSubmitLoginClick={handleSubmitLoginClick}
      />
      <Box marginY={2}>
        <Divider />
      </Box>
      {/* --------- register ------------ */}
      <Box className="create-account-btn-con" mt={3}>
        <Typography>Don't Have an Account?</Typography>
        <Link to="/registerpage" style={{ textDecoration: "none" }}>
          <LoginRegisterBtn color="deepskyblue" text="Register" />
        </Link>
      </Box>
    </Container>
  );
};

export default LoginPage;
