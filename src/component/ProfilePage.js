import { Box, Typography } from "@mui/material";

import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
import LoginRegisterBtn from "./Buttons/LoginRegisterBtn";
import React from "react";
import { useContext } from "react";

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {!user ? (
        <Box
          id="prifile-page"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Box mt={3}>
            <Typography>
              You are not logged in yet. Please login first.
            </Typography>
          </Box>

          <Box mt={3} style={{ textAlign: "center" }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <LoginRegisterBtn color="green" text="Login" />
            </Link>
          </Box>

          <Box
            className="create-account-btn-con"
            mt={3}
            style={{ textAlign: "center" }}
          >
            <Typography>Don't Have an Account?</Typography>
            <Link to="/registerpage" style={{ textDecoration: "none" }}>
              <LoginRegisterBtn color="deepskyblue" text="Register" />
            </Link>
          </Box>
        </Box>
      ) : (
        <>
          {/* ------------ Profile ----------- */}
          <Box className="profile-con">
            <Typography variant="h4" component="h3" align="center" m={2}>
              Your Profile
            </Typography>
            <Typography>
              Your Email: <strong> {user.email}</strong>
            </Typography>
          </Box>
        </>
      )}
    </>
  );
};

export default ProfilePage;
