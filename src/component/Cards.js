import { CircularProgress, Grid, } from "@mui/material";

import { AppContext } from './context/appContext.js';
import OneCard from "./OneCard";
import PaginationCon from "./PaginationCon";
import React from "react";
import { useContext } from 'react';

function Cards() {
  // const [data, setData] = useState(null);
  // const [page, setPage] = useState(1);
  const app = useContext(AppContext);
  const {  isLoading, data, isError} = app;


  return (
    <>
      {isLoading && <CircularProgress color="inherit" />}
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={3}
          style={{ margin: "0 auto 4rem auto" }}
        >
          {data &&
            data.map((card) => {
              return (
                card.imageUrl && <OneCard key={card.id} card={card} />
              );
            })}
        </Grid>
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


