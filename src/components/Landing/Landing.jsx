import React from "react";
import { Card, CardMedia, CardActionArea } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import logo from "../../assets/greenish2.png";

function Landing() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.cardActions}
        component={Link}
        to="/about"
      >
        <CardMedia className={classes.media} />
        <img
          src={logo}
          alt="Greenish"
          height="10vh"
          className={classes.image}
        />
      </CardActionArea>
    </Card>
  );
}

export default Landing;
