import * as React from "react";
import {
  Card,
  Box,
  Divider,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function OneCard({ card }) {
  // const test =card && card.map(item => item.artist)
  // console.log("test: ", card);
  // const styleCard = {
  //   maxWidth: "importa",
  // };

  return (
    <>
      <Link style={{textDecoration: 'none'}} to={`/cards/details/${card && card.name}`}>
        <Card
          elevation={14}
          sx={{
            maxWidth: 414,
            maxHeight: "110px",
            display: "flex",
            margin: "1rem auto 1rem auto",
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
              <Typography
                noWrap
                variant="h6"
                component="h6"
                align="center"
                style={{ width: "99%", paddingRight: "3%" }}
              >
                {card.name}
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
        </Card>
      </Link>
    </>
  );
}


        //     <Button size="small">Share</Button>

        //       <Box
        //   sx={{
        //     display: "flex",
        //     width: "70px",
        //     alignItems: "center",
        //     pl: 1,
        //     pb: 1,
        //     padding: "unset",
        //   }}
        // >
        //   <CardActions
        //     sx={{
        //       flexDirection: "column",
        //       width: "inherit",
        //       padding: "inherit",
        //     }}
        //   >
        //     <Button size="small">More</Button>
        //   </CardActions>
        // </Box>

