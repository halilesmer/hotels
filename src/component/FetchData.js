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
          {data && 
              data.map(card => {
                  return (
                    <Grid container spacing={2}>
                      <Grid item xs={8}>
                        <OneCard key={card.id} card={card} />;
                      </Grid>
                    </Grid>
                  );

    })}
          
    </>
  );
}

export default FetchData;
