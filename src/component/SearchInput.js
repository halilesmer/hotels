import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  IconButton,
  InputBase,
} from "@mui/material";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

const SearchInput = ({ urlHandle, page}) => {
  // const [query, setQuery] = React.useState("");
  //   const [url, setUrl] = React.useState(
  //     "https://api.magicthegathering.io/v1/cards"
  //   );
  //   const [isError, setIsError] = React.useState("");
const app = useContext(AppContext);
  const { searchQuery, setSearchQuery } = app;

  // const searchDelay=(e)=>{
  //   setInterval(()=>{
  //     setSearchQuery(e.target.value.toLowerCase().replace(/  +/g, " "))
  //   },500)
  // }

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        //   setUrl(`https://api.magicthegathering.io/v1/cards?query=${query}`);
        urlHandle(
          searchQuery
        );
        e.preventDefault();
        setSearchQuery("");
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1,color:'white' }}
        placeholder="Search for cards"
        inputProps={{ "aria-label": "search cards" }}
        type="search"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value.toLowerCase().replace(/  +/g, " "))
        }}
      />
      <IconButton type="submit" color="inherit">
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchInput;

/*  <IconButton color="inherit">
        <MoreIcon />
      </IconButton>
       */
