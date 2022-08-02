import * as React from "react";

import Box from "@mui/material/Box";
import LoginRegisterBtn from "./Buttons/LoginRegisterBtn";
import TextField from "@mui/material/TextField";
import { AppContext } from "../context/appContext";

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
}) => {
  const { pwInputFocus, onBlur } = React.useContext(AppContext);

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
          onFocus={pwInputFocus}
          onBlur={onBlur}
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
          onFocus={pwInputFocus}
          onBlur={onBlur}
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
