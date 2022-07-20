import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import OneCard from "./OneCard";

function FetchData({ queryUrl }) {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(
    "https://api.magicthegathering.io/v1/cards?pageSize=20"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // const result = await fetch(queryUrl ? queryUrl : url);
        const result = await fetch(queryUrl ? queryUrl : url );
        const data = await result.json();
        setData(data.cards);
        console.log("data .length: ", data.cards.length);
      } catch (error) {
        setIsError(true);
        console.log("error: ", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [queryUrl]);
  console.log("queryUrl: ", queryUrl);
  console.log("data: ", data);

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
          style={{ margin: "4rem auto 4rem auto" }}
        >
          {data &&
            data.map((card) => {
              return (card.imageUrl && card.name === card.name) &&  <OneCard key={card.id} card={card} />;
            })}
        </Grid>
        {isError && <div>Something went wrong ...</div>}
      </Grid>
    </>
  );
}

export default FetchData;
