import { Box, Divider, Typography } from "@mui/material";

import { Container } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
// import LoginRegisterBtn from '../component/LoginRegisterBtn';
import LoginForm from "../component/LoginForm";
import LoginRegisterBtn from "../component/Buttons/LoginRegisterBtn";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { auth } from "../config/config";

const LoginPage = () => {
  // const {user, setUser} = useContext(AppContext);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login } = useContext(AuthContext);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmitLoginClick = (e) => {
    // console.log("email: ", e);
    login(email, password);

  };

  console.log("password: ", password);
  console.log("email: ", email);
  return (
    <Container
      id="loginCon"
      component="div"
      align="center"
      style={{ marginTop: "5rem" }}
    >
      <Typography
        align="center"
        variant="h3"
        component="h1"
        style={{ margin: "auto", display: "inline" }}
      >
        Login
      </Typography>

      <LoginForm
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        email={email}
        password={password}
        handleSubmitLoginClick={handleSubmitLoginClick}
      />

      <Box marginY={2}>
        <Divider />
      </Box>
      {/* --------- register ------------ */}
      <Box className="create-account-btn-con" mt={3}>
        <Typography>Don't Have an Account?</Typography>
        <Link to="/registerpage" style={{ textDecoration: "none" }}>
          <LoginRegisterBtn color="deepskyblue" text="Register" />
        </Link>
      </Box>
    </Container>
  );
};

export default LoginPage;
