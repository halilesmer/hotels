import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  Paper,
  Fab,
  IconButton,
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  InputBase,
  Divider,
} from "@mui/material";


const SearchInput = ({ urlHandle }) => {
  const [query, setQuery] = React.useState("");
//   const [url, setUrl] = React.useState(
//     "https://api.magicthegathering.io/v1/cards"
//   );
//   const [isError, setIsError] = React.useState("");

  console.log("query: ", query);

  return (
    <form
      onSubmit={(e) => {
        //   setUrl(`https://api.magicthegathering.io/v1/cards?query=${query}`);
        urlHandle(`https://api.magicthegathering.io/v1/cards?name=${query}`);
        e.preventDefault();
        //  e.target.reset();
        setQuery("");
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
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

      <IconButton color="inherit">
        <MoreIcon />
      </IconButton>
    </form>
  );

 
};

export default SearchInput;