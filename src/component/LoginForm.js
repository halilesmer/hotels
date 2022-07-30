import * as React from "react";

import { AuthContext } from "../component/context/authContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { user, setUser } = useContext(AuthContext);
  const redirect=  useNavigate()

  const handleLoginClick = async (e) => {
    console.log("user: ", user);

   await setUser({
      userName: "halil",
    });
    redirect('/cards/1')
  };

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
        autoComplete="off"
      >
        <TextField
          id="login-email"
          label="Email *"
          variant="filled"
          size="small"
        />
        <TextField
          id="login-pw"
          label="Passwort *"
          variant="filled"
          size="small"
        />
      </Box>
      <Box className="login-btn-con">
        <Button variant="outlined" size="medium" onClick={handleLoginClick}>
          Login
        </Button>
      </Box>
    </>
  );
};

export default LoginForm;
