import * as React from "react";

import { AuthContext } from "../context/authContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import MailIcon from "@mui/icons-material/Mail";
import { MenuItem } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export default function SwipeableTemporaryDrawer({ drawerKey, setDrawerKey }) {

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
  //  const handleClose = () => {
  //    setAnchorEl(null);
  //  };

  console.log("open: ", drawerKey);
  const list = (anchor) => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Hallo" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        {/* {user && (
          <Link style={{ textDecoration: "none" }} to="cards/1/">
            <MenuItem onClick={toggleDrawer}>Charachters</MenuItem>
          </Link>
        )} */}

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
