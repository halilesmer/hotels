import * as React from "react";
// import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Card,
  Avatar,
  Divider,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  IconButton,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { AppContext } from './context/AppContext.js';


export default function Details() {
  const { title } = useParams();

  // const [data, setData] = React.useState(null);
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [isError, setIsError] = React.useState(false);
  const app = useContext(AppContext);
  const { data, isLoading, isError }= app;


  // const url = `https://api.magicthegathering.io/v1/cards/`;


  const filteredData = data && data.filter((card) => {
    return (
      (card.imageUrl && card.name.toLowerCase().trim().replace(/\s+/g, ' ') === title.toLowerCase().trim().replace(/\s+/g, ' '))
    )
  })
  // console.log("data: ", data);
  // console.log("filteredData: ", filteredData);
  // console.log("title: ", title);


  return (
    <>
      {isLoading && <CircularProgress color="inherit" />}

      {filteredData &&
        filteredData.map(card =>{
          return (
        <Card key={card.id} sx={{ maxWidth: 345 }}>
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
            component="img"
            height="194"
            image={card.imageUrl}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Colors: {card.colors.map(color => color)}
            </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.name}
              </Typography>
          </CardContent>
              <Divider />

          <CardActions style={{justifyContent: 'space-between'}} disableSpacing>
           <Typography component='div'>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
           </Typography>


          
          </CardActions>
<Divider/>
              <Paper elevation={0} />
              <Typography component='p'><strong>Type:</strong> {card.type}</Typography>
              <Typography component='p'><strong>Mana Cost:</strong> {card.manaCost}</Typography>
              <Typography component='p'><strong>About:</strong> {card.originalText}</Typography>
              <Paper />
         
            
        </Card>

          )
        })
      }
      {isError && <div className="error-con" style={{ margin: 'auto' }}> 'Something went wrong'</div>}

    </>

  );
}
