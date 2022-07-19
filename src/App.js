import * as React from "react";
import "./App.css";
import Main from "./views/Main";
import NavBanner from "./views/NavBanner";
import FooterBanner from "./component/FooterBanner";
import { Container } from "@mui/system";

function App() {
  const [url, setUrl] = React.useState("");
  
  function urlHandle(e) {
    setUrl(e);
  }
  // console.log("urlApp.js: ", url);

  return (
    <>
      <Container>
        <NavBanner />
        <Main queryUrl={url} />
        <FooterBanner urlHandle={urlHandle} />
      </Container>
    </>
  );
}

export default App;
