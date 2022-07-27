import "./App.css";

import * as React from "react";

import { Container } from "@mui/system";
import FooterBanner from "./component/FooterBanner";
import Main from "./views/Main";
import NavBanner from "./views/NavBanner";

function App() {
 

  return (
    <>
      <Container>
        <NavBanner />
        <Main
          // queryUrl={url}
          // urlHandle={urlHandle}
          // handlePage={handlePage}
          // pageNum={page}
        />
        {/*
         */}
        <FooterBanner  />
      </Container>
    </>
  );
}

export default App;
