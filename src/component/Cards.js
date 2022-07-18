import * as React from "react";
import {
  Card,
  Divider,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import euro from "../assests/download.png";

export default function Cards() {
  const styleCard = {
    maxWidth: "importa",
  };
  return (
    <>
      <Card
        className={styleCard}
        elevation={14}
        sx={{
          maxWidth: 414,
          maxHeight: "100px",
          display: "flex",
          marginBottom: "2rem",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="100"
          //   image="https://dummyimage.com/100x100/cf14bc/bc22bf.jpg"
          //   title="Hallo"
          image={euro}

        />
        <CardContent sx={{ padding: "2px" }}>
          <Typography variant="h6" component="div" align="center">
            Lizard
          </Typography>
          <Divider />

                  <Typography variant="body2" color="text.secondary"
                    //   noWrap
                  sx={{    overflow: 'auto',
    height: '63px'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions sx={{ flexDirection: "column" }}>
          <Button size="small">Share</Button>
          <Button size="small">More</Button>
        </CardActions>
      </Card>
      <Card
        className={styleCard}
        sx={{ maxWidth: 414, maxHeight: "100px", display: "flex" }}
        elevation={24}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="100"
          image="https://dummyimage.com/100x100/cf14bc/bc22bf.jpg"
        />
        <CardContent sx={{ padding: "2px" }}>
          <Typography variant="h6" component="div" align="center">
            Lizard
          </Typography>
          <Divider />

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions sx={{ flexDirection: "column" }}>
          <Button size="small">Share</Button>
          <Button size="small">More</Button>
        </CardActions>
      </Card>
    </>
  );
}
