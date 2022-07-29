import { Route, Routes } from "react-router-dom";

import Cards from "./Cards";
import Details from "./Details";
import Home from "./Home";
import LoginPage from "./LoginPage";
import MyCardsPage from "./MyCardsPage";
import ProfilePage from "../component/ProfilePage";
import ProtectedRoute from "../component/ProtectedRoute";
import React from "react";
import Register from "../component/RegisterPage";

// import Grid from "@mui/material/Grid";

const Main = () => {
  return (
    <main id="mainCon" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="cards/:pagination"
          element={
            <ProtectedRoute>
              <Cards />
            </ProtectedRoute>
          }
        />

        <Route path="cards/details/:title" element={<Details />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<LoginPage text="Create an Account" />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="mycards" element={<MyCardsPage />} />
      </Routes>
    </main>
  );
};

export default Main;
