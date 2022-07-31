import React, { createContext, useContext, useEffect, useState } from "react";

import { AuthContext } from "./authContext";

const AppContext = createContext();

function AppProvider(props) {
  const { user } = useContext(AuthContext);
  const baseUrlCards = "https://api.magicthegathering.io/v1/cards";
  const [url, setUrl] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumb, setPageNumb] = useState(1);
  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [cardsId, setCardsId] = useState([]);
  const [isError, setIsError] = useState(false);
  const [favoritCards, setFavoritCards] = useState([]);
  const [firstUrl, ] = useState(
    /* ------------ used just for first time if the page loaded ----------  */
    `https://api.magicthegathering.io/v1/cards/?page=${pageNumb}`
  );

  function handlePage(e) {
    /* -------- setting pagination number for pagination */
    setPageNumb(e);
  }
  function urlHandle(e) {
    /* --------- setting search word ----------- */
    setSearchQuery(e);
  }
  useEffect(() => {
    /* ----------  setting URL for fetching API data -------------- */
    setUrl(`${baseUrlCards}?name=${searchQuery}&page=${pageNumb}&pageSize=20`);
  }, [searchQuery, pageNumb]);

  useEffect(() => {
    /* ----------   fetching API data -------------- */

    const fetchData = async () => {
      setIsLoading(true);
      if (user) {
        try {
          // const result = await fetch(queryUrl ? queryUrl : firstUrl);
          const result = await fetch(url ? url : firstUrl);
          // console.log("url: ", url);
          const data = await result.json();
          setData(data.cards);
          console.log("data.cards: ", data.cards);
        } catch (error) {
          setIsError(true);
          console.log("error: ", error);
        } finally {
          // setIsError(false);
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, [url, firstUrl, user]);

  function handleAddCardClick(newId) {
    /* ------------- adding favorit cards ------------  */
    if (cardsId.length < 1) {
      setCardsId([...cardsId, newId]);
      /* ------------- adding card first time ------------  */
      data &&
        data.forEach((card) => newId === card.id && setFavoritCards(card));
    } else {
      if (cardsId.includes(newId)) {
        /* ------------- removing card ------------  */
        setCardsId(cardsId.filter((cardId) => cardId !== newId));
      } else {
        /* ------------- adding card  ------------  */
        setCardsId([...cardsId, newId]);
      }
    }
  }

  useEffect(() => {
    /* -------------- store favorit cards in state (favoritCards)--------------*/
    let saveFavCards = [];
    data &&
      data.map((card) => {
        return cardsId.map((crdId) => {
          return crdId === card.id && saveFavCards.push(card);
        });
      });

    setFavoritCards(saveFavCards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsId]);

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
    cardsId,
    setCardsId,
    handleAddCardClick,
    favoritCards,
  };

  // console.log("pageNumb: ", pageNumb);
  // console.log("searchQuery: ", searchQuery);
  // console.log("url: ", url);
  // console.log("AuthContext: ", AuthContext);
  // console.log("data: ", data);
  // console.log("favoritCards: ", favoritCards);
  // console.log("cardId: ", cardsId);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
export { AppContext, AppProvider };
