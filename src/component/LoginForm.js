import React,{useContext, useEffect, useRef, useState, } from "react";
import { TextField, Box,  } from "@mui/material";
import LoginRegisterBtn from "./Buttons/LoginRegisterBtn";
import { AppContext } from "../context/appContext";


const LoginForm = ({
  handleEmailChange,
  handlePasswordChange,
  email,
  password,
  handleSubmitLoginClick,
}) => {

const { pwInputFocus, onBlur} = useContext(AppContext);



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
        />
        <TextField
          id="login-pw"
          label="Passwort"
          variant="filled"
          size="small"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          onFocus={pwInputFocus}
          onBlur={onBlur}
          // onKeyUp={keyHandler}
        />
      </Box>
      <Box className="login-btn-con">
        <LoginRegisterBtn
          onClick={handleSubmitLoginClick}
          text="Log in"
          color="black"
        />{" "}
        {/* <Button
          variant="outlined"
          size="medium"
          onClick={handleSubmitLoginClick}
        >
          Login
        </Button> */}
      </Box>
    </>
  );
};

export default LoginForm;
