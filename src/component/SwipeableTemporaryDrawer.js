import * as React from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { AppContext } from "../context/appContext";
import { AuthContext } from "../context/authContext";
import { Badge } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import MessageIcon from "@mui/icons-material/Message";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { auth } from "../config/config";
import { signOut } from "firebase/auth";

export default function SwipeableTemporaryDrawer({ drawerKey, setDrawerKey }) {
  const { favoritCards } = React.useContext(AppContext);
  const { setUser, setLoading } = React.useContext(AuthContext);

  const navigateTo = useNavigate();
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //  setState({ ...state, [anchor]: open });
    setDrawerKey(open);
  };
  const logout = (e) => {
    setLoading(true);
    // handleClose();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
        navigateTo("/");
        setLoading(false);
      })
      .catch((error) => {
        // An error happened.
        console.log("sign out error: ", error);
      });
  };

  let activeStyle = {
    textDecoration: "underline",
  };
  let noActive = {
    textDecoration: "none",
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* ----------------- All Characters  Page Link  --------------------- */}

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FlutterDashIcon />
            </ListItemIcon>

            <NavLink
              to="/cards/1"
              style={({ isActive }) => (isActive ? activeStyle : noActive)}
            >
              <ListItemText primary="All Charachters" />
            </NavLink>
          </ListItemButton>
        </ListItem>
      </List>
      {/* ----------------- My Characters  Page Link  --------------------- */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BookmarkBorderIcon />
            </ListItemIcon>
            <NavLink
              to="/mycards"
              style={({ isActive }) => (isActive ? activeStyle : noActive)}
            >
              <Badge
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: 9,
                    height: 18,
                    minWidth: 18,
                    right: -15,
                    top: 18,
                    // border: `2px solid ${theme.palette.background.paper}`,
                    padding: "0 4px",
                  },
                }}
                badgeContent={
                  favoritCards.length > 0 ? favoritCards.length : "0"
                }
                color="primary"
              >
                <ListItemText primary={"My Characters"} />
              </Badge>{" "}
            </NavLink>
          </ListItemButton>
        </ListItem>
      </List>

      {/* --------- Message Icon/ Menu -------- starts */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MessageIcon />
            </ListItemIcon>
            <NavLink
              to="chat/"
              style={({ isActive }) => (isActive ? activeStyle : noActive)}
            >
              <ListItemText primary={"Chat"} />
            </NavLink>
          </ListItemButton>
        </ListItem>
      </List>
      {/* --------- Message Icon/ Menu -------- ends */}

      <Divider />
      <List>
        <ListItem disablePadding onClick={logout}>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment>
          <SwipeableDrawer
            anchor={"top"}
            open={drawerKey}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list("top")}
          </SwipeableDrawer>
        </React.Fragment>
      }
    </div>
  );
}
