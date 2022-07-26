import * as React from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import IconButton from "@mui/material/IconButton";
import {
  Box,
  IconButton,
  AppBar,
  CssBaseline,
  Toolbar,
 
  Divider,
} from "@mui/material";
import SearchInput from "./SearchInput";
import { useLocation, useNavigate } from "react-router-dom";

export default function FooterBanner() {
  const navigate = useNavigate();
  const url = useLocation();
  
  const handleBackClick=()=> {
 return   url.pathname === '/' ? null : navigate(-1)
  }
  return (
    <React.Fragment>
      <footer
        className="footer"
        style={{
          width: "100%",
          position: "fixed",
          bottom: "0",
          left: 0,
        }}
      >
        <CssBaseline />

        <AppBar
          position="static"
          color="primary"
          sx={{
            margin: "auto",
            top: "auto",
            left: "unset",
            right: "unset",
            bottom: 0,
            maxWidth: 420,
            width: "100%",
          }}
        >
          <Toolbar>
           {url.pathname !== '/' && <IconButton color="inherit" aria-label="open drawer"
            onClick={handleBackClick}>
              <ArrowBackIosIcon />
            </IconButton>}

            <Box sx={{ flexGrow: 1 }} />

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

           {url.pathname === '/cards' && <SearchInput />}
          </Toolbar>
        </AppBar>
      </footer>
    </React.Fragment>
  );
}
