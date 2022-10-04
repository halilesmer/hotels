import React, { createContext, useContext, useEffect, useState } from "react";

import { AuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

function AppProvider(props) {
  const { user } = useContext(AuthContext);
  const baseUrlCards = "https://api.magicthegathering.io/v1/cards";
  const [url, setUrl] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumb, setPageNumb] = useState(1);
  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  // const [cardsId, setCardsId] = useState([]);
  const [isError, setIsError] = useState(false);
  // const [favoritCards, setFavoritCards] = useState([]);
  /* ----- Passwort Input element for LoginForm ----- */
  const [focused, setFocused] = useState(false);
  // const [blur, setBlur] = useState(false);
  const navigateTo = useNavigate();

  /* ------------ used just for first time if the page loaded ----------  */
  // `https://api.magicthegathering.io/v1/cards/?page=${pageNumb}`
  const [firstUrl] = useState(
    `https://api.magicthegathering.io/v1/cards/?page=1`
  );

  function handlePage(e) {
    /* -------- setting pagination number for pagination */
    setPageNumb(e);
  }
  function urlHandle(e) {
    /* --------- setting search word ----------- */
    navigateTo("cards/1");
    setSearchQuery(e);
  }

  useEffect(() => {
    /* ----------  setting URL for fetching API data -------------- */
    setUrl(`${baseUrlCards}?name=${searchQuery}&page=${pageNumb}&pageSize=20`);
  }, [searchQuery, pageNumb]);

  useEffect(() => {
    /* ----------   fetching API data -------------- */
    let didCancel = false;

    if (user) {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
          if (!didCancel) {
            const result = await fetch(url ? url : firstUrl);
            const data = await result.json();

            const seen = new Set();
            const uniqueCharacters = data.cards.filter((e) => {
              const duplicate = seen.has(e.name);
              seen.add(e.name);
              return !duplicate;
            });
            setData(uniqueCharacters);

            // console.log("data.cards: ", data.cards);
          }
        } catch (error) {
          if (!didCancel) {
            console.log("error: ", error);
          }
        } finally {
          if (!didCancel) {
            setIsLoading(false);
          }
        }
      };
      fetchData();
    }
    /* Abort data fetching when component unmounted */
    return () => {
      didCancel = true;
    };
  }, [url, firstUrl, user]);
  
  /* ----- Passwort onfocus for LoginForm ----- */
  const handlePwInputFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const value = {
    baseUrlCards,
    focused,
    // handleAddCardClick,

    pageNumb,
    handlePage,
    urlHandle,
    isLoading,
    data,
    setData,
    isError,
    // cardsId,
    // setCardsId,
    setIsLoading,
    setPageNumb,
    setUrl,
    searchQuery,
    setSearchQuery,
    // favoritCards,
    handlePwInputFocus,
    onBlur,
    url,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
export { AppContext, AppProvider };
