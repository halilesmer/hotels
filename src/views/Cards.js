import { CircularProgress, Grid, Typography } from "@mui/material";

import { AppContext } from "../context/appContext";
import ErrorPage from "../component/ErrorPage";
import { MyCardsContext } from "../context/myCardsContext";
import PaginationCon from "../component/PaginationCon";
import { useContext } from "react";

function Cards() {
  const { isLoading, isError, data } = useContext(AppContext);
  const { dataForEachCards } = useContext(MyCardsContext);

  console.log("data: ", data);
  return (
    <>
      {isError && <ErrorPage errorMsg="Something went wrong ..." />}
     
      <Grid container spacing={3} className="grid-container">
        <Typography
          variant="h4"
          component="h4"
          style={{
            width: "100%",
            textAlign: "center",
            margin: "1.5rem 0px 0 0",
          }}
        >
          Cards
        </Typography>
        {dataForEachCards}
      </Grid>
      {<PaginationCon data={data} />}

      {data && data.length < 1 && (
        <Typography mt={12} align="center" className="searchResultAlert">
          "I'm sorry. I was not able to find a match."
        </Typography>
      )}
    </>
  );
}

export default Cards;
