import * as React from "react";

import { Badge, MenuItem } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { AppContext } from "../context/appContext";
import { AuthContext } from "../context/authContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import HubIcon from "@mui/icons-material/Hub";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import MailIcon from "@mui/icons-material/Mail";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export default function SwipeableTemporaryDrawer({ drawerKey, setDrawerKey }) {
  const { favoritCards } = React.useContext(AppContext);

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
  // const links = (link) => {
  //   return navigateTo(link);
  // };
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
              <HubIcon />
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
              <HubIcon />
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

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
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
