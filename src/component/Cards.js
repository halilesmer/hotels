import React from "react";
import OneCard from "./OneCard";
import FetchData from "../component/FetchData";
import { Grid } from "@mui/material";

const Cards = ({queryUrl}) => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={4}
        xl={3}
        style={{ margin: "4rem auto 4rem auto" }}
      >
        <FetchData queryUrl={queryUrl} />;
      </Grid>
    </Grid>
  );
};

export default Cards;
