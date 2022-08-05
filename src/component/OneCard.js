import * as React from "react";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";

import { AppContext } from "../context/appContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function OneCard({ card, cardId }) {
  const [color, setColor] = React.useState("green");
  const { isLoading, cardsId, handleAddCardClick } =
    useContext(AppContext);

  React.useEffect(() => {
    /* ------- set color for fav button ----------- */
    cardsId.includes(card.id) ? setColor(true) : setColor(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsId]);
  const styles = {
    favBtn: {
      background: "white",
      color: color ? "hwb(56deg 16% 66%)" : "white",
      width: "18px",
      height: "18px",
      margin: "0 0.5rem",
    },
  };

  // console.log("cardId: ", cardId);
  // console.log("card: ", card);
  return (
    <>
      {isLoading && <CircularProgress color="inherit" />}

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
            alt={card?.name}
            image={card?.imageUrl}
            style={{
              width: "100px",
              margin: "2px 0 2px 2px",
              borderRadius: "10px",
            }}
          />
        </Link>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <CardContent sx={{ padding: "2px 0 0 2px" }} className="card-content">
            {/* ------------------ Card header -------------------------- */}
            <div
              className="one-card-header-area"
              style={{ display: "flex", width: "100%", alignItems: "center" }}
            >
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
                style={styles.favBtn}
                size="small"
                onClick={(e) => handleAddCardClick(card.id)}
              >
                {/* ---------- changes icons/ color depending  on selected favorit card */}
                {color && <FavoriteIcon fontSize="18px" />}
                {!color && (
                  <FavoriteBorderIcon
                    fontSize="18px"
                    sx={{ color: "#bdb76b", background: "white" }}
                  />
                )}
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
              <Box className="">
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
