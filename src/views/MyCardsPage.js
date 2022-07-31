import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";

import { AppContext } from "../component/context/appContext";
import { Box } from "@mui/system";
import ErrorPage from "../component/ErrorPage";
import OneCard from "../component/OneCard";

const MyCardsPage = () => {
  const { isLoading, setCardsId, favoritCards, isError } =
    useContext(AppContext);

  return (
    <Box>
      <Typography
        variant="h4"
        component="h4"
        align="center"
        style={{ margin: "auto" }}
      >
        My Cards
      </Typography>

      <Grid container spacing={1}>
        {isLoading && <CircularProgress color="inherit" />}
        {isError && <ErrorPage />}

        <Button onClick={() => setCardsId([])}>Delete All Cards</Button>
        {favoritCards &&
          favoritCards.map((card) => {
            return (
              <Grid
                key={card.id}
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={3}

                // style={{ margin: "0 auto 4rem auto" }}
              >
                {<OneCard key={card.id} card={card} />}
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default MyCardsPage;

/*  <Grid
              key={card.id}
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={3}

              // style={{ margin: "0 auto 4rem auto" }}
              >
                {  <OneCard key={card.id} card={card} />}
              </Grid>
 */
