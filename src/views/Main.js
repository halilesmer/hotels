import React from "react";
// import Grid from "@mui/material/Grid";
import FetchData from "../component/FetchData";


const Main = ({queryUrl}) => {
  return (
    <>
      <FetchData queryUrl={queryUrl} />
    </>
  );
};

export default Main;
