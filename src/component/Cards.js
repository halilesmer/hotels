import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import OneCard from "./OneCard";
import PaginationCon from "./PaginationCon";

function Cards({ queryUrl, handlePage, pageNum }) {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(
    `https://api.magicthegathering.io/v1/cards/?page=${page}`
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // const result = await fetch(queryUrl ? queryUrl : url);
        const result = await fetch(queryUrl ? queryUrl : url);
        const data = await result.json();
        setData(data.cards);
      } catch (error) {
        setIsError(true);
        console.log("error: ", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [queryUrl, page, url]);

  // const handleChange = (page) => {
  //   console.log("page: ", page);
  //   // setPage(page);
  //   setUrl(page);
  // };

  // console.log("queryUrl: ", queryUrl);
  // console.log("data: ", data);
  // console.log("data length: ", data?.length);


  return (
    <>
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
       pageNum={pageNum}
        handlePage={handlePage}
        data={data}
        // searchQuery={searchQuery}
      />
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
