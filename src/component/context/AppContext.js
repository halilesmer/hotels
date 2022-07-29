import React, { createContext, useContext, useEffect, useState } from "react";

import { AuthContext } from "./authContext.js";

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
          setIsError(false);
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, [url, firstUrl, user]);

  function handleAddCardClick(newId) {
    // check if newId is available in cardsId
    // if not available, add
    // if available delete it

    // cardsId.length < 1 && setCardsId([...cardsId, newId]);
    // setCardsId([...cardsId, newId]);

    // cardsId.length > 0 &&
    //   cardsId.map((crdId) => {
    //    setCardsId(cardsId !== newId);

    //   });
      
      if (cardsId.length < 1){
        console.log("adding card first time");
        setCardsId([...cardsId, newId]);
      }else {

        if(cardsId.includes(newId)){
          console.log("removing card");
          setCardsId(cardsId.filter(cardId => cardId !== newId))
        }else{
          console.log("adding card");
          setCardsId([...cardsId, newId]);
        }
        
      }
        


    //  cardsId.length < 1 && setCardsId([newId])

    //  cardsId.length > 1 && cardsId.map(crdID => {
    //   return crdID !== newId && setCardsId([...cardsId, newId])
    //  })

    // const filteredCards =
    //   cardsId.length > 0 &&
    //   cardsId.filter((cardId) => {
    //     return setCardsId([...cardsId, cardId !== id]);
    //   });

    //   const filteredCards = cardsId.length > 0 && cardsId.filter((cardId) => {
    // return id !== cardId;
    // });

  

    console.log("e: ", newId);
  }

  function handleDeleteCardClick(newId) {
    const filtered=  cardsId.filter((cardId) => {
      return cardId !== newId
    });

     return setCardsId(filtered);
  }

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
    handleDeleteCardClick,
  };

  // console.log("pageNumb: ", pageNumb);
  // console.log("searchQuery: ", searchQuery);
  // console.log("url: ", url);
  // console.log("AuthContext: ", AuthContext);
  // console.log("user: ", user);
  console.log("cardsId: ", cardsId);
  console.log("cardsId.length: ", cardsId.length);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
export { AppContext, AppProvider };
