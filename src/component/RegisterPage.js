import { Box, Divider, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { AppContext } from "../context/appContext";
import { AuthContext } from "../context/authContext";
import AuthErrorAlert from "./AuthErrorAlert";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import LoginRegisterBtn from "./Buttons/LoginRegisterBtn";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPwValid, setIsPwValid] = useState(false);
  const { register, emailIsInUse, setEmailIsInUse } = useContext(AuthContext);
  const { focused } = useContext(AppContext);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmitRegisterClick = (e) => {
    /* ---- Email Check ---- */
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
    if (!re.test(email)) {
      // invalid email, maybe show an error to the user.
      console.log("not valid email");
      setIsEmailValid(true);
    } else if (password.length < 6) {
      setIsPwValid(true);
    } else {
      register(email, password);
      // redirect("/cards/1");
    }
  };
  const handleClose = () => {
    setIsEmailValid(false);
    setIsPwValid(false);
    setEmailIsInUse(false);
  };

  useEffect(() => {
    handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused]);

  return (
    <Container
      id="registerCon"
      component="div"
      align="center"
      sx={{ marginTop: "2rem" }}
    >
      <Typography
        align="center"
        variant="h3"
        component="h1"
        style={{ margin: "auto", display: "inline" }}
      >
        Register
      </Typography>
      {/* ---------- alert -------------- */}
      {isEmailValid && (
        <AuthErrorAlert
          handleclose={handleClose}
          alertTxt="Your email address is invalid. Please enter a valid address."
        />
      )}
      {isPwValid && (
        <AuthErrorAlert
          handleclose={handleClose}
          alertTxt="Your password must be at least 6 characters."
        />
      )}
      {emailIsInUse && (
        <AuthErrorAlert
          handleclose={handleClose}
          alertTxt="This email is already in use. Please use another one."
        />
      )}
      {/* <RegisterForm test='test' createAcntBtnTxt={createAcntBtnTxt} /> */}
      <RegisterForm
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        email={email}
        password={password}
        handleSubmitRegisterClick={handleSubmitRegisterClick}
        isEmailValid={isEmailValid}
        isPwValid={isPwValid}
      ></RegisterForm>
      
      <Divider style={{ margin: "1rem" }} />
      <Box marginTop={1}>
        <Typography
          align="center"
          color="green"
          // variant="h3"
          // component="h1"
          style={{ margin: "auto", display: "inline" }}
        >
          You already have an Account?
        </Typography>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <LoginRegisterBtn color="green" text="Login" />
        </Link>
      </Box>
    </Container>
  );
};

export default RegisterPage;
