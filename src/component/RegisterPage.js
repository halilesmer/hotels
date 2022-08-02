import { Box, Divider, Typography } from "@mui/material";
import React, { useContext } from "react";

import { AuthContext } from "../context/authContext";
import { Container } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import LoginRegisterBtn from "./Buttons/LoginRegisterBtn";
// import LoginRegisterBtn from '../component/LoginRegisterBtn';
import RegisterForm from "./RegisterForm";
import { auth } from "../config/config";

// import { useLocation } from 'react-router-dom';

const RegisterPage = () => {
  // const url = useLocation();
  // const [firstName, setFirstName] = React.useState("");
  // const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPasswort] = React.useState("");
  const redirect = useNavigate();
  const { register, } = useContext(AuthContext);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPasswort(e.target.value);
  const handleSubmitRegisterClick = (e) => {
    register(email, password);
    redirect("/cards/1");
  };
  console.log("email: ", email);

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
      <RegisterForm
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        email={email}
        password={password}
        handleSubmitRegisterClick={handleSubmitRegisterClick}
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
