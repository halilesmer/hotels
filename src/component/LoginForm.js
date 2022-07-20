import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CreateAcntBtn from "./CreateAcntBtn";

const LoginForm = () => {
  return (
    <>
      <Box
        className="LoginForm"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          margin: "auto",
          width: "15rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="login-email" label="Email *" variant="filled" />
        <TextField id="login-pw" label="Passwort *" variant="filled" />
      </Box>
      <Box className="login-btn-con">
        <Button variant="outlined" size="medium">
          Login
        </Button>
      </Box>
      <Box className="create-account-btn-con" mt={3}>
        <CreateAcntBtn />
      </Box>
    </>
  );
};

export default LoginForm;
