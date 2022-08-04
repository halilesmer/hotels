import * as React from "react";

import {
  AppBar,
  Badge,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

import AccountCircle from "@mui/icons-material/AccountCircle";
import { AppContext } from "../context/appContext";
import { AuthContext } from "../context/authContext";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableTemporaryDrawer from "../component/SwipeableTemporaryDrawer";
import { auth } from "../config/config";
import { signOut } from "firebase/auth";
import { useContext } from "react";

export default function NavBanner() {
  const { favoritCards } = useContext(AppContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, setUser } = useContext(AuthContext);
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


  
  const [open, setOpen] = React.useState(false);
  // const [state, setState] = React.useState({
    //   top: false,
    //   // left: false,
    //   // bottom: false,
    //   // right: false,
    // });
    const toggleDrawer = (open) => (event) => {
      if (
        event &&
     event.type === "keydown" &&
     (event.key === "Tab" || event.key === "Shift")
   ) {
     return;
    }
    //  setState({ ...state, [anchor]: open });
    setOpen(!open)
  };

  
  console.log("open: ", open);
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(open)}
          >
            <MenuIcon />
          </IconButton>
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
                <Link style={{ textDecoration: "none" }} to="login/">
                  <MenuItem onClick={handleClose}>Login</MenuItem>
                </Link>
              )}
              {!user && pathname.pathname !== "/login" && <Divider />}

              {/* ----------------- register Page Link  --------------------- */}

              {!user && (
                <Link style={{ textDecoration: "none" }} to="registerpage/">
                  <MenuItem onClick={handleClose}>Register</MenuItem>
                </Link>
              )}

              {/* ----------------- Profile Page Link  --------------------- */}
              <Link style={{ textDecoration: "none" }} to="profile/">
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>

              {/* ----------------- Favorit  Page Link  --------------------- */}
              {user && (
                <Link style={{ textDecoration: "none" }} to="mycards/">
                  <MenuItem onClick={handleClose}>
                    My Cards
                    <Badge
                      style={{
                        marginLeft: "16px",
                      }}
                      sx={{
                        "& .MuiBadge-badge": {
                          fontSize: 9,
                          height: 15,
                          minWidth: 15,
                        },
                      }}
                      badgeContent={
                        favoritCards.length > 0 ? favoritCards.length : "0"
                      }
                      color="primary"
                    ></Badge>
                  </MenuItem>
                </Link>
              )}

              {/* ----------------- Charachters  --------------------- */}
              {user && (
                <Link style={{ textDecoration: "none" }} to="cards/1/">
                  <MenuItem onClick={handleClose}>Charachters</MenuItem>
                </Link>
              )}

              {user && (
                <Link style={{ textDecoration: "none" }} to="chat/">
                  <MenuItem onClick={handleClose}>Chat</MenuItem>
                </Link>
              )}

              {/* ----------------- logout  Button--------------------- */}
              {user ? (
                <Box
                  sx={{
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={logout}
                >
                  <LogoutIcon />
                </Box>
              ) : (
                ""
              )}
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
        toggleDrawer={toggleDrawer}
        // onClose={toggleDrawer('false')}
        onClose={()=> setOpen(false)}
        open={open}
      />
    </Box>
  );
}
