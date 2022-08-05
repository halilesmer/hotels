import * as React from "react";

import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import AccountCircle from "@mui/icons-material/AccountCircle";
import { AuthContext } from "../context/authContext";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableTemporaryDrawer from "../component/SwipeableTemporaryDrawer";
import { auth } from "../config/config";
import { signOut } from "firebase/auth";
import { useContext } from "react";

export default function NavBanner() {
  const [drawerKey, setDrawerKey] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, setUser,  } = useContext(AuthContext);
  const pathname = useLocation();
  const navigateTo = useNavigate();

  const logout = (e) => {
    // setIsLoading(true);
    handleClose();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
        navigateTo("/");
        // setIsLoading(false);
      })
      .catch((error) => {
        // An error happened.
        console.log("sign out error: ", error);
      });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenDrawerClick = (event) => {
    setDrawerKey(!drawerKey);
  };

  let activeStyle = {
    textDecoration: "underline",
  };
  let noActive = {
    textDecoration: "none",
  };

  // console.log("drawerKey: ", drawerKey);
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: "1",
      }}
      gutterBottom
    >
      <AppBar position="static" sx={{ margin: "auto" }}>
        <Toolbar>
          {user && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleOpenDrawerClick}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            <Link style={{ textDecoration: "none" }} to="/">
              Magic The Gathering
            </Link>
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {/* ----------------- login Page Link  --------------------- */}
              {!user && pathname.pathname !== "/login" && (
                <List onClick={handleClose}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon style={{ minWidth: "2.5rem" }}>
                        <LoginIcon />
                      </ListItemIcon>

                      <NavLink
                        to="login/"
                        style={({ isActive }) =>
                          isActive ? activeStyle : noActive
                        }
                      >
                        <ListItemText primary="Login" />
                      </NavLink>
                    </ListItemButton>
                  </ListItem>
                </List>
              )}

              {/* ----------------- register Page Link  --------------------- */}

              {!user && (
                <List onClick={handleClose}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon style={{ minWidth: "2.5rem" }}>
                        <LockOpenIcon />
                      </ListItemIcon>

                      <NavLink
                        to="registerpage/"
                        style={({ isActive }) =>
                          isActive ? activeStyle : noActive
                        }
                      >
                        <ListItemText primary="Register" />
                      </NavLink>
                    </ListItemButton>
                  </ListItem>
                </List>
              )}

              {/* ----------------- Profile Page Link  --------------------- */}
              

              <List onClick={handleClose}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon style={{ minWidth: "2.5rem" }}>
                      <ManageAccountsIcon />
                    </ListItemIcon>

                    <NavLink
                      to="profile/"
                      style={({ isActive }) =>
                        isActive ? activeStyle : noActive
                      }
                    >
                      <ListItemText primary="Profile" />
                    </NavLink>
                  </ListItemButton>
                </ListItem>
              </List>

             
            </Menu>
          </div>

          {/* ----------------- logout  Icon--------------------- */}
          {user ? (
            <Box
              sx={{
                textAlign: "center",
                display: "inline-flex",
                cursor: "pointer",
              }}
              onClick={logout}
            >
              <LogoutIcon fontSize="small" />
            </Box>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>

      <SwipeableTemporaryDrawer
        // toggleDrawer={toggleDrawer}
        // onClose={toggleDrawer('false')}
        // onClose={() => setOpen(false)}
        // open={open}
        drawerKey={drawerKey}
        setDrawerKey={setDrawerKey}
      />
    </Box>
  );
}
