import { Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import LoginForm from '../component/LoginForm'

const Login = () => {
  return (
      <Container
          className='loginCon'
          component="div" align="center" style={{  marginTop: '10rem' }}>
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