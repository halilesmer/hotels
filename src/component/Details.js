import * as React from "react";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

import { AppContext } from "./context/appContext.js";
import { Box } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
// import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { title } = useParams();

  const app = useContext(AppContext);
  const { data, isLoading, isError } = app;

  // const url = `https://api.magicthegathering.io/v1/cards/`;

  const filteredData =
    data &&
    data.filter((card) => {
      return (
        card.imageUrl &&
        card.name.toLowerCase().trim().replace(/\s+/g, " ") ===
          title.toLowerCase().trim().replace(/\s+/g, " ")
      );
    });
  // console.log("data: ", data);
  // console.log("filteredData: ", filteredData);
  // console.log("title: ", title);

  return (
    <>
      {isLoading && <CircularProgress color="inherit" />}

      {filteredData &&
        filteredData.map((card) => {
          return (
            <Card
              style={{ margin: "auto" }}
              className="details-con"
              key={card.id}
              sx={{ maxWidth: 345 }}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={card.name}
                subheader={card?.type}
              />
              <CardMedia
                style={{ height: "auto", margin: "auto" }}
                component="img"
                // height="194"
                image={card.imageUrl}
                alt="Paella dish"
              />
              <CardActions
                style={{ justifyContent: "space-between" }}
                disableSpacing
              >
                <Typography component="div">
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </Typography>
              </CardActions>
              <Divider />

              <CardContent>
                <Box>
                  <Typography variant="h5" component="h3">
                    Characteristics
                  </Typography>

                  <Typography variant="body2">
                    <strong>Colors:</strong> {card.colors.map((color) => color)}
                  </Typography>

                  <Paper elevation={0} />
                  <Typography variant="body2" component="p">
                    <strong>Type:</strong> {card.type}
                  </Typography>
                  <Typography variant="body2" component="p">
                    <strong>Mana Cost:</strong> {card.manaCost}
                  </Typography>
                  <Typography variant="body2" component="p">
                    <strong>About:</strong> {card.originalText}
                  </Typography>
                  <Paper />
                </Box>
              </CardContent>
            </Card>
          );
        })}
      {isError && (
        <div className="error-con" style={{ margin: "auto" }}>
          'Something went wrong'
        </div>
      )}
    </>
  );
}
