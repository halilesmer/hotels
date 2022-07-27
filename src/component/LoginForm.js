import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const LoginForm = ({ createAcntBtnTxt }) => {
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
        <TextField id="login-email" label="Email *" variant="filled" size="small" />
        <TextField id="login-pw" label="Passwort *" variant="filled" size="small" />
      </Box>
      <Box className="login-btn-con">
        <Button variant="outlined" size="medium">
          Login
        </Button>
      </Box>
   
    </>
  );
};

export default LoginForm;
