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
  const styles = {
    media: {
      width: "100px",
      height: "100px",
      // paddingTop: "56.25%", // 16:9,
      // marginTop: "30",
    },
  };
  return (
    <>
      <Card
        elevation={14}
        sx={{
          maxWidth: 414,
          maxHeight: "110px",
          display: "flex",
          margin: "1rem 0 1rem 0",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          image={card?.imageUrl}
          style={{
            width: "100px",
            margin: "2px 0 2px 2px",
            borderRadius: "10px",
          }}
         
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
              {card?.flavor ? card.flavor : "no description"}
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
