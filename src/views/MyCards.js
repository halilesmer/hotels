import { Box, Container } from "@mui/system";
import React, { useContext, useState } from "react";

import { AppContext } from "../component/context/appContext.js";
import { Button } from "@mui/material";

const MyCards = () => {

  const [numb, setNumb] = useState([]);

  // const cardsId = [];
 
  const {cardsId, setCardsId}= useContext(AppContext);

  
      console.log("numb: ", numb);
  console.log("cardsId: ", cardsId);
  return (
    <Container>
      <Box>
        <Button>Add Card Id</Button>
        { cardsId.length > 0 && cardsId.map((card, i) => <li key={i}>{card}</li>)}

        <Button onClick={() => setCardsId("")}>Delete All Cards</Button>
      </Box>
    </Container>
  );
};

export default MyCards;
