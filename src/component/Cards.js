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

export default function Cards() {
    const styleCard = {
      maxWidth: 'importa',
    };
  return (
    <Card className={styleCard} sx={{ maxWidth: 345, maxHeight:'100px', display: "flex" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100"
        image="https://dummyimage.com/100x100/cf14bc/bc22bf.jpg"
      />
      <CardContent sx={{ padding: "2px", }}>
        <Typography variant="h6" component="div">
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
  );
}
