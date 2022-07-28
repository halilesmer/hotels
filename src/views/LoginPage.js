import { Box, Divider, Typography } from "@mui/material";

import { AuthContext } from "../component/context/authContext.js";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
// import LoginRegisterBtn from '../component/LoginRegisterBtn';
import LoginForm from "../component/LoginForm";
import LoginRegisterBtn from "../component/Buttons/LoginRegisterBtn";
import { useContext } from "react";

const LoginPage = ({ text }) => {
  // const {user, setUser} = useContext(AppContext);


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

      <LoginForm  />

      <Box marginY={2}>
        <Divider />
      </Box>
      <Box className="create-account-btn-con" mt={3}>
        <Typography>Don't Have an Account?</Typography>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <LoginRegisterBtn
            color="deepskyblue"
            text='Register'
          />
        </Link>
      </Box>
    </Container>
  );
};

export default LoginPage;
