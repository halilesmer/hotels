import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CreateAcntBtn from "./Buttons/CreateAcntBtn";

const LoginForm = ({ createAcntBtnTxt }) => {
  console.log("createAcntBtnTxt: ", createAcntBtnTxt);
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
      <Box className="create-account-btn-con" mt={3}>
        <CreateAcntBtn createAcntBtnTxt={createAcntBtnTxt}/>
      </Box>
    </>
  );
};

export default LoginForm;
