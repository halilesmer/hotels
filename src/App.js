import "./App.css";

import * as React from "react";

import { Container } from "@mui/system";
import FooterBanner from "./component/FooterBanner";
import Main from "./views/Main";
import NavBanner from "./views/NavBanner";
import { app } from "./config/config";

function App() {
  return (
    <>
      <NavBanner />
      <Container>
        <Main
       
        />
        {/*
         */}
      </Container>
      <FooterBanner />
    </>
  );
}

export default App;
