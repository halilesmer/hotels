import * as React from "react";

import {
  Box,
  IconButton,
  InputBase,
} from "@mui/material";

import { AppContext } from "../context/appContext";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";

const SearchInput = () => {

  const { urlHandle } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = React.useState('')
 
  const handleSubmitClick = () =>urlHandle(searchQuery);

  const keyHandler = (e) => {
    e.preventDefault();
    // if (e.key === "Enter") {
    if (e.key === "Enter") {
      urlHandle(searchQuery);
    }
  }
  const handleFocus=(event) => event.target.select();
  // console.log("searchQuery: ", searchQuery);

  return (
    <Box component="div">
      <InputBase
        sx={{ ml: 1, flex: 1, color: "white" }}
        placeholder="Search for cards"
        inputProps={{ "aria-label": "search cards" }}
        type="search"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value.toLowerCase().replace(/  +/g, " "));
        }}
        onKeyUp={keyHandler}
        onFocus={handleFocus}

      />
      <IconButton type="submit" color="inherit" onClick={handleSubmitClick}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchInput;
