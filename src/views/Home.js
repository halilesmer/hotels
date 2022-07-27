import { Button, CardActionArea, CardMedia, } from "@mui/material";

import { AppContext } from '../component/context/appContext.js';
import { Link, } from "react-router-dom";
import imageMagicGathering from "../assests/magic-gathering.webp";
import { useContext } from 'react';

const Home = () => {
  const { pageNumb } = useContext(AppContext);
  // const { pagination } = useParams();
  // console.log("pagination: ", pagination);
  
  // const [page, setPage] = useState(pageNumb);
  // useEffect(()=>setPage(pageNumb),[pageNumb])

  return (
    <div
      id="homeCon"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          //   height="140"
          //           height='667'
          //   width='1200'
          image={imageMagicGathering}
          alt="Magic-the-Gathering"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </CardActionArea>
      <Button
      size="large"
      variant="contained"
      style={{ marginTop: "2rem auto" }}
      sx={{
          fontWeight: "bold",
          color: "#d8e0e7",
          borderRadius: "30%",
          margin: "2rem auto",
        }}
        >
        <Link style={{ textDecoration: 'none' }} to={`/cards/${pageNumb}`}>

          To the Cards
          </Link>
        </Button>
      
    </div>
  );
};

export default Home;
