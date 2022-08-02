import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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
  /* ----- Passwort Input element for LoginForm ----- */
  const [focused, setFocused] = useState(false);
  const [blur, setBlur] = useState(false);

  const [firstUrl, setFirstUrl] = useState(
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
    let didCancel = false;

    if (user) {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
        try {
          // const result = await fetch(queryUrl ? queryUrl : firstUrl);
          if (!didCancel) {
            const result = await fetch(url ? url : firstUrl);
            // console.log("url: ", url);
            const data = await result.json();
            setData(data.cards);
            console.log("data.cards: ", data.cards);
          }
        } catch (error) {
          if (!didCancel) {
            setIsError(true);
            console.log("error: ", error);
          }
        } finally {
          if (!didCancel) {
            setIsLoading(false);
          }
        }
      }
      fetchData();
    };
    /* Abort data fetching when component unmounted */
    return () => {
      didCancel = true;
    };
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

  /* ----- Passwort onfocus for LoginForm ----- */
  const pwInputFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const value = {
    baseUrlCards,
    focused,
    handleAddCardClick,

    pageNumb,
    handlePage,
    urlHandle,
    isLoading,
    data,
    setData,
    isError,
    cardsId,
    setCardsId,
    setIsLoading,
    setPageNumb,
    setUrl,
    searchQuery,
    setSearchQuery,
    favoritCards,
    pwInputFocus,
    onBlur,
    url,
  };

  // console.log("pageNumb: ", pageNumb);
  // console.log("searchQuery: ", searchQuery);
  // console.log("url: ", url);
  // console.log("AuthContext: ", AuthContext);
  // console.log("data: ", data);
  // console.log("favoritCards: ", favoritCards);
  // console.log("cardId: ", cardsId);
  console.log("isLoading: ", isLoading);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
export { AppContext, AppProvider };
