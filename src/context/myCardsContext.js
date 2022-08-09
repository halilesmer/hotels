import React, { createContext, useContext, useEffect, useState } from "react";

import { AppContext } from "./appContext";
import { Grid } from "@mui/material";
import OneCard from "../component/OneCard";

const MyCardsContext = createContext();

const MyCardsProvider = (props) => {
  // const [color, setColor] = useState(() => {
  //   return undefined;
  // });
  const [color, setColor] = React.useState("");
  const [cardsId, setCardsId] = useState([]);
  const [cardIdendification, setCardIdendification] = useState("");
  const [favoritCards, setFavoritCards] = useState(null);

  const [loading, setLoading] = useState(false);
  const { data } = useContext(AppContext);

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

  const dataForEachCards =
    data &&
    data.map((card, i) => {
      return (
        card.imageUrl && (
          <Grid
            key={card.id}
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            xl={4}
            style={{ paddingTop: "0" }}

            // style={{ margin: "0 auto 4rem auto" }}
          >
            <OneCard cardId={card.id} card={card} />
          </Grid>
        )
      );
    });

  // const styles = {
  //   favBtn: {
  //     background: "white",
  //     color: color ? "blue" : "white",
  //     width: "18px",
  //     height: "18px",
  //     margin: "0 0.5rem",
  //   },
  // };

  // console.log("cardsId: ", cardsId);
  // console.log("color: ", color);
  // console.log("cardIdendification: ", cardIdendification);
  // console.log("dataForEachCards: ", dataForEachCards);

  return (
    <MyCardsContext.Provider
      value={{
        handleAddCardClick,
        cardsId,
        setCardsId,
        favoritCards,
        setCardIdendification,
        // styles,
        dataForEachCards,
      }}
    >
      {props.children}
    </MyCardsContext.Provider>
  );
};
export { MyCardsContext, MyCardsProvider };
