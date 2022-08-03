import { Box, TextField, } from "@mui/material";
import React,{useContext,} from "react";

import { AppContext } from "../context/appContext";
import { AuthContext } from "../context/authContext";
import LoginRegisterBtn from "./Buttons/LoginRegisterBtn";

const LoginForm = ({
  handleEmailChange,
  handlePasswordChange,
  email,
  password,
  handleSubmitLoginClick,
}) => {

const { pwInputFocus, onBlur,} = useContext(AppContext);
const {  pwError, emailError } = useContext(AuthContext);


 const handleSubmit = (e) => {
   e.preventDefault();
   if (e.key === "Enter" && email && password) {
     handleSubmitLoginClick();
   }
 };



  // const keyHandler = (e) => {
  //   e.preventDefault();
  //   if (e.key === "Enter") {
  //     handleSubmitLoginClick();
  //   }
  // };
  return (
    <>
      <Box
        className="loginForm"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          margin: "auto",
          width: "15rem",
        }}
        noValidate
        autoComplete="on"
      >
        <TextField
          id="login-email"
          htmlFor="login-email"
          name="login-email"
          label="Email"
          variant="filled"
          size="small"
          type="email"
          value={email}
          onChange={handleEmailChange}
          // onChange={focusInput}
          required
          onFocus={pwInputFocus}
          onBlur={onBlur}
          error={emailError}
          onKeyUp={handleSubmit}
        />
        <TextField
          id="login-pw"
          htmlFor="login-pw"
          name="login-pw"
          label="Passwort"
          variant="filled"
          size="small"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          onFocus={pwInputFocus}
          onBlur={onBlur}
          error={pwError}
          onKeyUp={handleSubmit}

          // onKeyUp={keyHandler}
        />
        <LoginRegisterBtn
          className="login-btn"
          onClick={handleSubmitLoginClick}
          text="Log in"
          color="black"
        />{" "}
      </Box>
    </>
  );
};

export default LoginForm;
