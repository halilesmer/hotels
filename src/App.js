import * as React from "react";
import "./App.css";
import Main from "./views/Main";
import NavBanner from "./views/NavBanner";
import FooterBanner from "./component/FooterBanner";
import { Container } from "@mui/system";
import Login from "./views/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";


function App() {
  const baseUrlCards = "https://api.magicthegathering.io/v1/cards";
  const [url, setUrl] = React.useState("");
const [searchQuery, setSearchQuery] = React.useState('');
const [page, setPage] = React.useState(1);

function handlePage(e) {
  setPage(e)
}
function urlHandle(e) {
  setSearchQuery(e)
}
React.useEffect(() => {
  setUrl(`${baseUrlCards}?name=${searchQuery}&page=${page}&pageSize=20`);
  
},[searchQuery, page])

console.log("page: ", page);
  return (
    <>
      <Container>
        <NavBanner />
        <Main
          queryUrl={url}
          urlHandle={urlHandle}
          handlePage={handlePage}
          pageNum={page}
        />
        {/*
         */}
        <FooterBanner urlHandle={urlHandle} />
      </Container>
    </>
  );
}

export default App;
