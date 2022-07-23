import { Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
// import CreateAcntBtn from '../component/CreateAcntBtn';
import RegisterForm from '../component/RegisterForm'

const Register = ({ createAcntBtnTxt }) => {
    return (
        <Container
            id='registerCon'
            component="div" align="center" style={{ marginTop: '5rem' }}>
            <Typography
                align="center"
                variant="h3"
                component="h1"
                style={{ margin: "auto", display: "inline" }}
            >
                Register
            </Typography>

            <RegisterForm test='test' createAcntBtnTxt={createAcntBtnTxt} />
        </Container>
    );
}

export default Register