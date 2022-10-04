import { Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";

import { AppContext } from "../context/appContext";
import { Box } from "@mui/system";
import ErrorPage from "../component/ErrorPage";
import Loading from "../component/Loading";
import { MyCardsContext } from "../context/myCardsContext";
import OneCard from "../component/OneCard";

const MyCardsPage = () => {
  const { isLoading, isError } = useContext(AppContext);
  const { setCardsId, favoritCards } = useContext(MyCardsContext);

  console.log("favoritCards: ", favoritCards);
  return (
    <Box>
      <Box
        component="div"
        className="cards-header-con"
        sx={{ textAlign: "center" }}
      >
        <Typography
          variant="h4"
          component="h4"
          align="center"
          style={{ margin: "auto", width: "100%" }}
        >
          My Cards
        </Typography>
        {/* ------- Delete all cards button ----- */}
        {favoritCards && favoritCards.length > 0 ? (
          <Button
            variant="contained"
            color="error"
            onClick={() => setCardsId([])}
            style={{ width: "12rem" }}
          >
            Delete All Cards
          </Button>
        ) : (
          <Typography
            variant="h6"
            component="h4"
            align="center"
            style={{ margin: "5rem  auto", width: "100%" }}
          >
            No favorit cards yet!
          </Typography>
        )}
      </Box>
      <Grid container spacing={1}>
        {isLoading && <Loading />}
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
