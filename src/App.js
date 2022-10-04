import "./App.css";

import * as React from "react";

import { Container } from "@mui/system";
import FooterBanner from "./component/FooterBanner";
import Main from "./views/Main";
import NavBanner from "./views/NavBanner";

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
