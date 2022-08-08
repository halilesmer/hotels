import React, { createContext, useContext, useEffect, useState } from "react";

import { AppContext } from "./appContext";
import { useNavigate } from "react-router-dom";

const MyCardsContext = createContext();

const MyCardsProvider = (props) => {
  // const [color, setColor] = useState(() => {
  //   return undefined;
  // });
   const [color, setColor] = useState();
  const [cardsId, setCardsId] = useState([]);
  const [favoritCards, setFavoritCards] = useState(null);

  const [loading, setLoading] = useState(false);
  const { data } = useContext(AppContext);

  const redirect = useNavigate();

  function handleAddCardClick(newId) {
     cardsId.includes(newId) ? setColor(true) : setColor(false);




    console.log("newId: ", newId);
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


  console.log("cardsId: ", cardsId);
  console.log("color: ", color);

  return (
    <MyCardsContext.Provider
      value={{
        color,
        setColor,
        handleAddCardClick,
        cardsId,
        setCardsId,
        favoritCards,
        // handleChangeColorClick,
      }}
    >
      {props.children}
    </MyCardsContext.Provider>
  );
};
export { MyCardsContext, MyCardsProvider };
