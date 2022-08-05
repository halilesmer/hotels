import * as React from "react";

import { AppContext } from "../context/appContext";
import { AuthContext } from "../context/authContext";
import Box from "@mui/material/Box";
import LoginRegisterBtn from "./Buttons/LoginRegisterBtn";
import TextField from "@mui/material/TextField";

export const PostIntro = ({ children }) => {
    return <div className="post__intro">{children}</div>;
};

const RegisterForm = ({
  // children,
  handleEmailChange,
  handlePasswordChange,
  email,
  password,
  handleSubmitRegisterClick,
  isEmailValid,
  isPwValid
}) => {
  const { handlePwInputFocus, onBlur } = React.useContext(AppContext);
  
  const { emailIsInUse, pwError,  } = React.useContext(AuthContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && email && password) {
      handleSubmitRegisterClick();
    }
  };
  
  
  // console.log("isPwValid: ", isPwValid);
  // console.log("pwError: ", pwError);
  // console.log("emailIsInUse: ", emailIsInUse);
  // console.log("isEmailValid: ", isEmailValid);
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
        {/* <TextField id="first-name" label="First Name" variant="filled" size="small" type='text' required />
                <TextField id="last-name" label="Last Name" variant="filled" size="small" type='text' required /> */}

        <TextField
          id="register-email"
          label="Email"
          variant="filled"
          size="small"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          onFocus={handlePwInputFocus}
          onBlur={onBlur}
          error={emailIsInUse || isEmailValid}
          onKeyUp={handleSubmit}
        />
        <TextField
          id="register-pw"
          label="Passwort"
          variant="filled"
          size="small"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          onFocus={handlePwInputFocus}
          onBlur={onBlur}
          error={isPwValid || pwError}
          onKeyUp={handleSubmit}
        />

        {/* <LoginRegisterBtn createAcntBtnTxt={createAcntBtnTxt} /> */}
        {/* {children} */}
        <LoginRegisterBtn
          onClick={handleSubmitRegisterClick}
          text="Send Form"
          color="black"
        />
      </Box>
      {/* <Box className="create-account-btn-con" mt={3}>
            </Box> */}
    </>
  );
};

export default RegisterForm;
