import * as React from "react";
import {
  Card,
  Box,
  Divider,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import euro from "../assests/download.png";

export default function OneCard({ card }) {
  
  // const test =card && card.map(item => item.artist)
  // console.log("test: ", card);
  // const styleCard = {
  //   maxWidth: "importa",
  // };
  return (
    <>
      <Card
        elevation={14}
        sx={{
          maxWidth: 414,
          maxHeight: "100px",
          display: "flex",
          margin: "1rem 0 1rem 0",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="100"
          //   image="https://dummyimage.com/100x100/cf14bc/bc22bf.jpg"
          //   title="Hallo"
          image={card?.imageUrl}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ padding: "2px 0 0 2px" }}>
            <Typography variant="h6" component="div" align="center">
              {card.artist}
            </Typography>
            <Divider />

            <Typography
              variant="body2"
              color="text.secondary"
              //   noWrap
              sx={{ overflow: "auto", height: "63px" }}
            >
              {card?.flavor ? card.flavor : 'no description' }
            </Typography>
          </CardContent>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pl: 1,
            pb: 1,
            padding: "unset",
          }}
        >
          <CardActions sx={{ flexDirection: "column" }}>
            <Button size="small">Share</Button>
            <Button size="small">More</Button>
          </CardActions>
        </Box>
      </Card>
    </>
  );
}
