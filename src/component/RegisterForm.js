import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CreateAcntBtn from "./Buttons/CreateAcntBtn";

const RegisterForm = ({ createAcntBtnTxt, test }) => {
    console.log("test: ", test);
    return (
        <>
            <Box
                className="registerForm"
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                    margin: "auto",
                    width: "15rem",
                }}
                noValidate
                autoComplete="on"
            >

                <TextField id="first-name" label="First Name" variant="filled" size="small" type='text' required />
                <TextField id="last-name" label="Last Name" variant="filled" size="small" type='text' required />

                <TextField id="register-email" label="Email" variant="filled" size="small" type='email' required />
                <TextField id="register-pw" label="Passwort" variant="filled" size="small" type='password' required />

                <CreateAcntBtn createAcntBtnTxt={createAcntBtnTxt} />
            </Box>

            {/* <Box className="create-account-btn-con" mt={3}>
            </Box> */}
        </>
    );
};

export default RegisterForm;
