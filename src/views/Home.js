import {
  Button,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

import { AuthContext } from "../context/authContext";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import LoginRegisterBtn from "../component/Buttons/LoginRegisterBtn";
import imageMagicGathering from "../assests/magic-gathering.webp";
import { useContext } from "react";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Box id="homeCon" style={{ display: "flex", flexDirection: "column" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={imageMagicGathering}
            alt="Magic-the-Gathering"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </CardActionArea>

        {user ? (
          <>
            <Box mt={3}>
              <Typography align="center" variant="p" component="p">
                Welcome <strong>{user.email}</strong>
              </Typography>
            </Box>

            <Button
              size="large"
              variant="contained"
              style={{ marginTop: "2rem auto" }}
              sx={{
                fontWeight: "bold",
                color: "#d8e0e7",
                borderRadius: "30%",
                margin: "2rem auto",
              }}
            >
              <Link style={{ textDecoration: "none" }} to={`/cards/1`}>
                Cards
              </Link>
            </Button>
          </>
        ) : (
          <>
            <Box mt={3} style={{ textAlign: "center" }}>
              <Typography align="center">
                To navigate to the cards, please login first.
              </Typography>
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
          </>
        )}
      </Box>
    </>
  );
};

export default Home;
