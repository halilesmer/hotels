import { Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
// import CreateAcntBtn from '../component/CreateAcntBtn';
import LoginForm from '../component/LoginForm'

const Login = () => {
  return (
      <Container
          id='loginCon'
          component="div" align="center" style={{  marginTop: '5rem' }}>
      <Typography
        align="center"
        variant="h3"
        component="h1"
        style={{ margin: "auto", display: "inline" }}
      >
        Login
      </Typography>

          <LoginForm />
    </Container>
  );
}

export default Login