import React, { useEffect, useState } from "react";
import {CircularProgress, Grid, Spinner} from "@mui/material";
import OneCard from "./OneCard";
import PaginationCon from "./PaginationCon";
import {useContext} from 'react';
import {AppContext} from './context/AppContext.js';

// { queryUrl, handlePage, pageNum }
function Cards() {
  const [data, setData] = useState(null);
  // const [page, setPage] = useState(1);
  const app = useContext(AppContext);
  console.log("app: ", app);
  const [url, setUrl] = useState(
    `https://api.magicthegathering.io/v1/cards/?page=${app.page}`
    );

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // const result = await fetch(queryUrl ? queryUrl : url);
        const result = await fetch(app.queryUrl ? app.queryUrl : url);
        const data = await result.json();
        setData(data.cards);
      } catch (error) {
        setIsError(true);
        console.log("error: ", error);
      }finally{
        setIsError(false)
        setIsLoading(false);
      }
    };

    fetchData();
  }, [app.queryUrl, app.page, url]);

  // const handleChange = (page) => {
  //   console.log("page: ", page);
  //   // setPage(page);
  //   setUrl(page);
  // };

  // console.log("queryUrl: ", queryUrl);
  // console.log("data: ", data);
  // console.log("data length: ", data?.length);

console.log('isError', isError)
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
       pageNum={app.page}
        handlePage={app.handlePage}
        data={data}
        // searchQuery={searchQuery}
      />
      {isError && <div className="error-con" style={{margin: 'auto'}}> 'Something went wrong'</div>}
    </>
  );
}

export default Cards;






// <PaginationCon/>
//  <Pagination
//       size="small"
//       count={4}
//       showFirstButton
//       showLastButton
//               sx={{ margin: "auto" }}
//               onChange={(e, page) => handleChange(page)}
//     />
