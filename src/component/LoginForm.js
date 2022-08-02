import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import LoginRegisterBtn from "./Buttons/LoginRegisterBtn";

const LoginForm = ({
  handleEmailChange,
  handlePasswordChange,
  email,
  password,
  handleSubmitLoginClick,
}) => {

 

 

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
          onClick={handleEmailChange}
          required
        />
        <TextField
          id="login-pw"
          label="Passwort"
          variant="filled"
          size="small"
          type="password"
          value={password}
          onClick={handlePasswordChange}
          required
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
