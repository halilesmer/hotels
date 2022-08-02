import { Button, CardActionArea, CardMedia, Typography } from "@mui/material";

import { AppContext } from "../context/appContext";
import { AuthContext } from "../context/authContext";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import LoginRegisterBtn from "../component/Buttons/LoginRegisterBtn";
import imageMagicGathering from "../assests/magic-gathering.webp";
import { useContext } from "react";

const Home = () => {
  const { pageNumb } = useContext(AppContext);
  const { user } = useContext(AuthContext);

  // const { pagination } = useParams();
  // console.log("pagination: ", pagination);

  // const [page, setPage] = useState(pageNumb);

  return (
    <Box id="homeCon" style={{ display: "flex", flexDirection: "column" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          //   height="140"
          //           height='667'
          //   width='1200'
          image={imageMagicGathering}
          alt="Magic-the-Gathering"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </CardActionArea>

      {user ? (
        <>
          <Typography variant="p" component='p'>Welcome {user.name}</Typography>
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
            <Link style={{ textDecoration: "none" }} to={`/cards/${pageNumb}`}>
              To the Cards
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
  );
};

export default Home;
