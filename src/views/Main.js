import { Grid, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Cards from "../component/Cards";
import Details from "../component/Details";
import Home from "./Home";
import Login from "./Login";
import React from "react";
import Register from "../component/RegisterPage";

// import Grid from "@mui/material/Grid";

const Main = ({ queryUrl, handlePage, pageNum }) => {

  return (
    
    <Typography
      component="main"
      id="mainCon"
      style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="cards/:pagination"
          element={
            <Cards
              queryUrl={queryUrl}
              handlePage={handlePage}
              pageNum={pageNum}
            />
          }
        />
    
        <Route path="cards/details/:title" element={<Details />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login createAcntBtnTxt='Create an Account' />} />
      </Routes>
    </Typography>
  );
};

export default Main;
