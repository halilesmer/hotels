import { Typography } from '@mui/material'
import { Container } from '@mui/system';
import React, { Children } from 'react'
import { useLocation } from 'react-router-dom';
// import CreateAcntBtn from '../component/CreateAcntBtn';
import RegisterForm from './RegisterForm'
import CreateAcntBtn from './Buttons/CreateAcntBtn';


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
            <RegisterForm test='test' createAcntBtnTxt={'hallo'}>
                <CreateAcntBtn createAcntBtnTxt='Send Form' />
            </RegisterForm>
        </Container>
    );
}

export default Register