import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext();

function AppProvider(props) {
  const baseUrlCards = "https://api.magicthegathering.io/v1/cards";
  const [url, setUrl] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumb, setPageNumb] = useState(1);
  const [data, setData] = useState(null);
  const [user, setUser] = useState(0);
  
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function handlePage(e) {
    setPageNumb(e);
  }
  function urlHandle(e) {
    setSearchQuery(e);
  }
  useEffect(() => {
    // setUrl(`${baseUrlCards}?name=${searchQuery}&Numb=${pageNumb}&pageSize=20`);
    setUrl(`${baseUrlCards}?name=${searchQuery}&page=${pageNumb}&pageSize=20`);
  }, [searchQuery, pageNumb]);

  const [firstUrl, setFirstUrl] = useState(
    `https://api.magicthegathering.io/v1/cards/?page=${pageNumb}`
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // const result = await fetch(queryUrl ? queryUrl : firstUrl);
        const result = await fetch(url ? url : firstUrl);
        console.log("url: ", url);
        const data = await result.json();
        setData(data.cards);
        console.log("data.cards: ", data.cards);
      } catch (error) {
        setIsError(true);
        console.log("error: ", error);
      } finally {
        setIsError(false);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, firstUrl]);

  const value = {
    baseUrlCards,
    url,
    setUrl,
    searchQuery,
    setSearchQuery,
    pageNumb,
    setPageNumb,
    handlePage,
    urlHandle,
    isLoading,
    data,
    setData,
    isError,
  };

  // console.log("pageNumb: ", pageNumb);
  // console.log("searchQuery: ", searchQuery);
  // console.log("url: ", url);
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
export { AppContext, AppProvider };
