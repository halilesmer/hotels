import { CircularProgress, Grid, } from "@mui/material";

import { AppContext } from './context/appContext.js';
import OneCard from "./OneCard";
import PaginationCon from "./PaginationCon";
import React from "react";
import { useContext } from 'react';

function Cards() {

  const { isLoading, data, isError } = useContext(AppContext);
 

  return (
    <>
      {isLoading && <CircularProgress color="inherit" />}
      <Grid container spacing={1}>
        {data &&
          data.map((card) => {
            return (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={3}

              // style={{ margin: "0 auto 4rem auto" }}
              >
                {card.imageUrl && <OneCard key={card.id} card={card} />}
              </Grid>
            );
          })}
      </Grid>

      <PaginationCon
        //  pageNum={page}
        //   handlePage={handlePage}
        data={data}
      // searchQuery={searchQuery}
      />
      {isError && <div className="error-con" style={{ margin: 'auto' }}> 'Something went wrong'</div>}
    </>
  );
}

export default Cards;


