import {
  Box,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";

import { AppContext } from "../context/appContext";
import { AuthContext } from "../context/authContext";
import AuthErrorPage from "../component/AuthErrorAlert";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
// import LoginRegisterBtn from '../component/LoginRegisterBtn';
import LoginForm from "../component/LoginForm";
import LoginRegisterBtn from "../component/Buttons/LoginRegisterBtn";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {
    login,
    pwError,
    setPwError,
    setEmailError,
    emailError,
    someError,
    setSomeError,
  } = useContext(AuthContext);
  const { focused, isLoading, } = useContext(AppContext);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmitLoginClick = (e) => {
    login(email, password);
  };

  /* ---- closes alert for password error ------ */
  const handleClose = () => {
    setPwError(false);
    setEmailError(false);
    setSomeError(false);
  };

  useEffect(() => {
    handleClose();
  }, [focused]);

  return (
    <>
      {isLoading && (
        <Box
          className="circularProgress"
          style={{ height: "80%", textAlign: "center", lineHeight: "20" }}
        >
          <CircularProgress color="inherit" />
        </Box>
      )}
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
            alertTxt="Authentication failed. Please check your password."
          />
        )}
        {emailError && (
          <AuthErrorPage
            handleclose={handleClose}
            alertTxt="Authentication failed. Please check your email."
          />
        )}
        {someError && (
          <AuthErrorPage
            handleclose={handleClose}
            alertTxt="Authentication failed. Please check your email and password."
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
    </>
  );
};

export default LoginPage;
