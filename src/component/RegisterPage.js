import { Box, Divider, Typography } from "@mui/material";

import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import LoginRegisterBtn from "./Buttons/LoginRegisterBtn";
import React from "react";
// import LoginRegisterBtn from '../component/LoginRegisterBtn';
import RegisterForm from "./RegisterForm";

// import { useLocation } from 'react-router-dom';

const Register = () => {
  // const url = useLocation();

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

      {/* <RegisterForm test='test' createAcntBtnTxt={createAcntBtnTxt} /> */}
      <RegisterForm test="test">
        <LoginRegisterBtn text="Send Form" color='black' />
      </RegisterForm>
      <Divider />
      <Box marginTop={1}>
        <Typography
          align="center"
          color='green'
          // variant="h3"
          // component="h1"
          style={{ margin: "auto", display: "inline" }}
        >
          You already have an Account?
        </Typography>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <LoginRegisterBtn color='green' text='Login' />
        </Link>
      </Box>
    </Container>
  );
};

export default Register;
