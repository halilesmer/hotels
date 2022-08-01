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
      <Box component="div" className="cards-header-con" sx={{textAlign:'center'}}>
        <Typography
          variant="h4"
          component="h4"
          align="center"
          style={{ margin: "auto", width: "100%", }}
        >
          My Cards
        </Typography>

        <Button
          variant="contained"
          color="error"
          onClick={() => setCardsId([])}
          style={{ width: "12rem", }}
        >
          Delete All Cards
        </Button>
      </Box>
      <Grid container spacing={1}>
        {isLoading && <CircularProgress color="inherit" />}
        {isError && <ErrorPage />}

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
