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

import { AppContext } from "../context/appContext";
import { Box } from "@mui/system";
import ErrorPage from "../component/ErrorPage";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MyCardsContext } from "../context/myCardsContext";
import ShareIcon from "@mui/icons-material/Share";
import { grey } from "@mui/material/colors";
// import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const [color, setColor] = React.useState("");

  const { title } = useParams();

  const { data, isLoading, isError } = useContext(AppContext);
  const { cardsId, handleAddCardClick, styles } = useContext(MyCardsContext);
  const [filteredData, setFilteredData] = React.useState(null);

  /* ------- Favorit Icon Functs & styles --------- starts */
  React.useEffect(() => {
    const filter = data.filter((card) => {
      return (
        card.imageUrl &&
        card.name.toLowerCase().trim().replace(/\s+/g, " ") ===
          title.toLowerCase().trim().replace(/\s+/g, " ")
      );
    });
    setFilteredData(filter[0]);
    /* ------- set color for fav button ----------- */
    cardsId.includes(filter[0].id) ? setColor(true) : setColor(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsId]);

  const styleDetails = {
    shareBtn: {
      // background: "white",
      // color: color ? "hwb(56deg 16% 66%)" : "white",
      width: "18px",
      height: "18px",
      margin: "0 0.5rem",
    },
  };

  return (
    <>
      {isLoading && <CircularProgress color="inherit" />}
      {console.log("data", data)}
      {filteredData && (
        <Card
          style={{ margin: "auto" }}
          className="details-con"
          key={filteredData.id}
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
            title={filteredData.name}
            subheader={filteredData?.type}
          />
          <CardMedia
            style={{ height: "auto", margin: "auto" }}
            component="img"
            // height="194"
            image={filteredData.imageUrl}
            alt="Paella dish"
          />
          <CardActions
            style={{ justifyContent: "space-between" }}
            disableSpacing
          >
            <div>
              <IconButton
                aria-label="add to favorites"
                // style={styles.favBtn}
                size="small"
                onClick={(e) => handleAddCardClick(filteredData.id)}
              >
                {/* ---------- changes icons/ color depending  on selected favorit card */}
                {color && (
                  <FavoriteIcon
                    fontSize="18px"
                    sx={{ color: "#de1d1d", background: "white" }}
                  />
                )}
                {!color && (
                  <FavoriteBorderIcon
                    fontSize="18px"
                    sx={{ color: "#bdb76b", background: "white" }}
                  />
                )}
              </IconButton>
              <IconButton
                aria-label="share"
                sx={{
                  background: grey[500],
                  width: "18px",
                  height: "18px",
                  margin: "0 0.5rem",
                }}
              >
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
                <strong>Colors:</strong>{" "}
                {filteredData.colors.map((color) => color)}
              </Typography>

              <Paper elevation={0} />
              <Typography variant="body2" component="p">
                <strong>Type:</strong> {filteredData.type}
              </Typography>
              <Typography variant="body2" component="p">
                <strong>Mana Cost:</strong> {filteredData.manaCost}
              </Typography>
              <Typography variant="body2" component="p">
                <strong>About:</strong> {filteredData.originalText}
              </Typography>
              <Paper />
            </Box>
          </CardContent>
        </Card>
      )}
      {isError && <ErrorPage errorMsg="Something went wrong ..." />}
    </>
  );
}
