import * as React from "react";

import {
  Avatar,
  Button,
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

import { AppContext } from "../component/context/appContext";
import { Box } from "@mui/system";
import ErrorPage from "../component/ErrorPage";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import { grey } from "@mui/material/colors";
// import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { yellow } from "@mui/material/colors";

export default function Details() {
  const { title } = useParams();

  const {
    data,
    isLoading,
    isError,
    handleAddCardClick,
    handleDeleteCardClick,
  } = useContext(AppContext);

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
                <div>
                  <IconButton
                    aria-label="add to favorites"
                    sx={{ background: grey[500] }}
                    onClick={(e) => handleAddCardClick(card.id)}
                  >
                    <FavoriteIcon sx={{ color: yellow[500] }} />
                  </IconButton>
                  <Button onClick={(e) => handleDeleteCardClick(card.id)}>
                    Delete
                  </Button>
                  <IconButton aria-label="share" sx={{ background: grey[500] }}>
                    <ShareIcon />
                  </IconButton>
                </div>
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
      {isError && <ErrorPage/>}
    </>
  );
}
