import * as React from "react";
import "./App.css";
import Main from "./views/Main";
import NavBanner from "./views/NavBanner";
import FooterBanner from "./component/FooterBanner";
import { Container } from "@mui/system";
import Login from './views/Login'
function App() {
  const [url, setUrl] = React.useState("");
  
  function urlHandle(e) {
    setUrl(e);
  }

  return (
    <>
      <Container >
      <NavBanner />
      <Main queryUrl={url} />
      {/*  
      <Login /> 
    */}
    <FooterBanner urlHandle={urlHandle} /> 
      </Container>
    </>
  );
}

export default App;
