import * as React from "react";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";

import { AppContext } from "../component/context/appContext.js";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { useContext } from "react";
import { yellow } from "@mui/material/colors";

export default function OneCard({ card }) {
 const {
   data,
   isLoading,
   isError,
   cardsId,
   setCardsId,
   handleAddCardClick,
   handleDeleteCardClick,
 } = useContext(AppContext);
  return (
    <>
   
        <Card
          elevation={14}
          sx={{
            maxWidth: 414,
            maxHeight: "110px",
            display: "flex",
            margin: "1rem auto 1rem auto",
          }}
        >
           <Link
        style={{ textDecoration: "none" }}
        to={`/cards/details/${card && card.name}`}
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
      </Link>
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <CardContent
              sx={{ padding: "2px 0 0 2px" }}
              className="card-content"
            >
            {/* ------------------ Card header -------------------------- */}
              <div className="one-card-header-area" 
              style={{display: 'flex', width: '100%', alignItems: 'center'}}>
                <Typography
                  noWrap
                  variant="h6"
                  component="h6"
                  align="center"
                  style={{ width: "99%", fontSize: "small" }}
                >
                  {card.name}
                </Typography>

                <IconButton
                  aria-label="add to favorites"
                  sx={{ background: grey[500],width:'18px', height:'18px',
                  margin:'0 0.5rem' }}
                  size='small'
                  onClick={(e) => handleAddCardClick(card.id)}
                >
                  <FavoriteIcon fontSize='18px' sx={{ color: yellow[500] }} />
                </IconButton>
              </div>

              <Divider />

              {/* <Typography
                variant="body2"
                color="text.secondary"
                //   noWrap
                sx={{ overflow: "auto", height: "63px" }}
              >
                {card?.power? card.power : "no description"}
              </Typography> */}
                 <Link
        style={{ textDecoration: "none" }}
        to={`/cards/details/${card && card.name}`}
      >
              <Box className="" >
                <Typography
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center" }}
                  marginTop={0.5}
                >
                  Power:
                  <Rating
                    name="read-only"
                    value={Number.parseInt(card.power, 10)}
                    readOnly
                    precision={0.5}
                    size={"small"}
                    sx={{ marginLeft: "1rem" }}
                  />
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center" }}
                  marginTop={0.5}
                >
                  Mana Cost:{" "}
                  <span style={{ marginLeft: "1rem" }}>{card.manaCost}</span>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ alignItems: "center" }}
                  marginTop={0.5}
                >
                  Toughness:
                  <span style={{ marginLeft: "1rem" }}>
                    {card.toughness ? card.toughness : "no toughness"}
                  </span>
                </Typography>
              </Box>
      </Link>
            </CardContent>
          </Box>
        </Card>
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
