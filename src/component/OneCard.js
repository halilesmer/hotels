import * as React from "react";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Rating,
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
          <Box sx={{ display: "flex", flexDirection: "column",width:'100%' }}>
            <CardContent sx={{ padding: "2px 0 0 2px",  }} className='card-content'>
              <Typography
                noWrap
                variant="h6"
                component="h6"
                align="center"
                style={{ width: "99%", paddingRight: "3%", fontSize:'medium' }}
              >
                {card.name}
              </Typography>

              <Divider />

              {/* <Typography
                variant="body2"
                color="text.secondary"
                //   noWrap
                sx={{ overflow: "auto", height: "63px" }}
              >
                {card?.power? card.power : "no description"}
              </Typography> */}
              <Box className="">
                <Typography variant="body2" sx={{display:'flex', alignItems:'center'}} marginTop={0.5}>
                Power:
                 <Rating name="read-only" value={Number.parseInt(card.power,10)} readOnly precision={0.5} size={"small"} sx={{ marginLeft:'1rem'}}
                 />
                </Typography>
  <Typography variant="body2" sx={{display:'flex', alignItems:'center', }} marginTop={0.5}>Mana Cost: <span style={{marginLeft:'1rem'}}>{card.manaCost}</span></Typography>
              </Box>
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

