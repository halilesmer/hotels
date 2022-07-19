import React from "react";
import FetchData from "../component/FetchData";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <Grid container spacing={2} sx={{ margin: "3rem auto 4rem auto" }}>
      <FetchData />
    </Grid>
  );
};

export default Home;
