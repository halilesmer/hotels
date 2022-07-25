import { Typography } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Cards from "../component/Cards";
import Home from "./Home";
import Login from "./Login";
import Details from "../component/Details";
import Register from "../component/Register";
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
          path="cards"
          element={
            <Cards
              queryUrl={queryUrl}
              handlePage={handlePage}
              pageNum={pageNum}
            />
          }
        />
        <Route path="cards/details/:title" element={<Details />} />
        <Route path="register" element={<Register createAcntBtnTxt='Send Form' />} />
        <Route path="login" element={<Login createAcntBtnTxt='Create an Account' />} />
      </Routes>
    </Typography>
  );
};

export default Main;
