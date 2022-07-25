import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  IconButton,
  InputBase,
} from "@mui/material";

const SearchInput = ({ urlHandle, page}) => {
  const [query, setQuery] = React.useState("");
  //   const [url, setUrl] = React.useState(
  //     "https://api.magicthegathering.io/v1/cards"
  //   );
  //   const [isError, setIsError] = React.useState("");


  return (
    <Box
      component="form"
      onSubmit={(e) => {
        //   setUrl(`https://api.magicthegathering.io/v1/cards?query=${query}`);
        urlHandle(
          query
        );
        e.preventDefault();
        //  e.target.reset();
        setQuery("");
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1,color:'white' }}
        placeholder="Search for cards"
        inputProps={{ "aria-label": "search cards" }}
        type="search"
        value={query}
        onChange={(event) =>
          setQuery(event.target.value.toLowerCase().replace(/  +/g, " "))
        }
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
