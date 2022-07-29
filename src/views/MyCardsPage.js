import { Box, Container } from "@mui/system";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";

import { AppContext } from "../component/context/appContext.js";
import OneCard from "../component/OneCard.js";

const MyCardsPage = () => {

 
  const { isLoading, data, isError, cardsId, setCardsId, handleDeleteCardClick, handleAddCardClick,  } =
    useContext(AppContext);

  
  console.log("cardsId: ", cardsId);
  return (

      <Box > 
        <Typography variant="h4" component="h4" align="center" style={{margin:'auto'}}>My Cards</Typography>

             <Button onClick={() => setCardsId([])}>Delete All Cards</Button>

      {isLoading && <CircularProgress color="inherit" />}
      <Grid container spacing={1}>
        {data &&
          data.map((card) => {
            return (
              cardsId.map(crdId =>{

return (
  crdId === card.id && (
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
  )
);
              })


            
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