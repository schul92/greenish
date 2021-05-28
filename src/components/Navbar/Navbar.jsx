import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/greenish2.png";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import StorefrontIcon from "@material-ui/icons/Storefront";
import InfoIcon from "@material-ui/icons/Info";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import EventIcon from "@material-ui/icons/Event";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  let history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: <ListItemText primary="ABOUT" />,
      pageURL: "/about",
      icon: <InfoIcon fontSize="small" />,
    },
    {
      menuTitle: <ListItemText primary="SHOP" />,
      pageURL: "/shop",
      icon: <StorefrontIcon fontSize="small" />,
    },
    {
      menuTitle: <ListItemText primary="BOOK" />,
      pageURL: "/book",
      icon: <EventIcon fontSize="small" />,
    },
    {
      menuTitle: <ListItemText primary="EVENT" />,
      pageURL: "/event",
      icon: <EventSeatIcon fontSize="small" />,
    },
    {
      menuTitle: <ListItemText primary="CONTACT" />,
      pageURL: "/contact",
      icon: <ContactMailIcon fontSize="small" />,
    },
    // {
    //     icon: <FacebookIcon fontSize="large" />,
    //     menuTitle: <InstagramIcon fontSize="large" />,
    //     text: <TwitterIcon fontSize="large" />,
    //   },
  ];

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <StyledMenu
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
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            {menuItems.map((menuItem) => {
              const { menuTitle, pageURL, icon, text} = menuItem;
              return (
                <StyledMenuItem onClick={() => handleMenuClick(pageURL)}>
                  
                  <ListItemIcon>{icon} {text}</ListItemIcon>
                 {menuTitle} 
                </StyledMenuItem>
              );
            })}
          </StyledMenu>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Greenish"
              height="10vh"
              className={classes.image}
            />
          </Typography>

          <div className={classes.grow} />
          {location.pathname === "/shop" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
