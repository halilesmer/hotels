import { Button, CardActionArea, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import imageMagicGathering from "../assests/magic-gathering.webp";

const Home = () => {
  return (
    <Typography
      component="div"
      id="homeCon"
      style={{ display: "flex", flexDirection: "column" }}
    >
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
        <Link to='/cards'>
          To the Cards
          </Link>
        </Button>
      
    </Typography>
  );
};

export default Home;
