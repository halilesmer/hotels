import { CircularProgress, Grid, Typography } from "@mui/material";

import { AppContext } from "../context/appContext";
import ErrorPage from "../component/ErrorPage";
import OneCard from "../component/OneCard";
import PaginationCon from "../component/PaginationCon";
import React from "react";
import { useContext } from "react";

function Cards() {
  const { isLoading, data, isError } = useContext(AppContext);

  return (
    <>
      {isError && <ErrorPage />}
      {isLoading && <CircularProgress color="inherit" />}
      <Grid container spacing={3} className="grid-container">
        <Typography
          variant="h4"
          component="h4"
          style={{
            width: "100%",
            textAlign: "center",
            margin: "1.5rem 0px 0 0",
          }}
        >
          Cards
        </Typography>
        {data &&
          data.map((card) => {
            return (
              card.imageUrl && (
                <>
                  <Grid
                    key={card.id}
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={4}
                    style={{ paddingTop: "0" }}

                    // style={{ margin: "0 auto 4rem auto" }}
                  >
                    <OneCard cardId={card.id} card={card} />
                  </Grid>
                </>
              )
            );
          })}
      </Grid>
      {data && data.length > 0 && <PaginationCon data={data} />}

      {data && data.length < 1 && (
        <Typography mt={12} align="center" className="searchResultAlert">
          "I'm sorry. I was not able to find a match."
        </Typography>
      )}
    </>
  );
}

export default Cards;
