import React from "react";
import Cards from "../component/Cards";
// import Grid from "@mui/material/Grid";



const Main = ({queryUrl}) => {
  return (
    <>
      <Cards queryUrl={queryUrl} />
    </>
  );
};

export default Main;
