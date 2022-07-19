import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import OneCard from "./OneCard";

function FetchData() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("https://api.magicthegathering.io/v1/cards");

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      const data = await result.json();
      setData(data.cards);
    };

    fetchData();
  }, [url]);
  console.log("data: ", data);

  return (
    <>
      <Grid container spacing={2} sx={{ margin: "4rem auto 4rem auto" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={3}
          style={{ padding: "0 2px 0 2px" }}
        >
          {data &&
            data.map((card) => {
              return <OneCard key={card.id} card={card} />;
            })}
        </Grid>
      </Grid>
    </>
  );
}

export default FetchData;
