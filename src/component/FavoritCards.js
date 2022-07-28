import { Box, Container } from '@mui/system';

import { Button } from '@mui/material';
import React from 'react'

const FavoritCards = () => {
    const cardsId = [];
    console.log("cardsId: ", cardsId);

const addCards=(e)=>{
    console.log("e: ", e);
    cardsId.push(e.target.value)
}
  return (
    <Container>
        <Box>
            <Button onClick={addCards}>Add Card Id</Button>

        </Box>
    </Container>
  )
}

export default FavoritCards