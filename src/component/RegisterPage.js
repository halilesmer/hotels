import React, { Children } from 'react'

import { Container } from '@mui/system';
import CreateAcntBtn from './Buttons/CreateAcntBtn';
// import CreateAcntBtn from '../component/CreateAcntBtn';
import RegisterForm from './RegisterForm'
import { Typography } from '@mui/material'
import { useLocation } from 'react-router-dom';

const Register = ({ createAcntBtnTxt }) => {
    const url = useLocation();

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

            {/* <RegisterForm test='test' createAcntBtnTxt={createAcntBtnTxt} /> */}
            <RegisterForm test='test' >
                <CreateAcntBtn createAcntBtnTxt='Send Form' />
            </RegisterForm>
        </Container>
    );
}

export default Register