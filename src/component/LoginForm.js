import {
  Box,
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { AppContext } from "../context/appContext";
import { AuthContext } from "../context/authContext";
import LoginRegisterBtn from "./Buttons/LoginRegisterBtn";

const LoginForm = ({
  handleEmailChange,
  handlePasswordChange,
  email,
  password,
  handleSubmitLoginClick,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { pwInputFocus, onBlur } = useContext(AppContext);
  const { pwError, emailError } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && email && password) {
      handleSubmitLoginClick();
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Box
        className="loginForm"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          margin: "auto",
          width: "15rem",
        }}
        noValidate
        autoComplete="on"
      >
        <Grid xs={12} sm={6} item>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="login-email">Password</InputLabel>
            <FilledInput
              id="login-email"
              name="login-email"
              label="Email"
              variant="filled"
              size="small"
              type="email"
              value={email}
              onChange={handleEmailChange}
              // onChange={focusInput}
              required
              onFocus={pwInputFocus}
              onBlur={onBlur}
              error={emailError}
              onKeyUp={handleSubmit}
            />
          </FormControl>
        </Grid>
        <Grid xs={12} sm={6} item>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="login-pw">Password</InputLabel>
            <FilledInput
              id="login-pw"
              name="login-pw"
              label="Passwort"
              variant="filled"
              size="small"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              required
              onFocus={pwInputFocus}
              onBlur={onBlur}
              error={pwError}
              onKeyUp={handleSubmit}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }

              // onKeyUp={keyHandler}
            />
          </FormControl>
        </Grid>
        <LoginRegisterBtn
          className="login-btn"
          onClick={handleSubmitLoginClick}
          text="Log in"
          color="black"
        />{" "}
      </Box>
    </>
  );
};

export default LoginForm;
