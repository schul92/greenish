import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./Grids/styles";
import Grids from "./Grids/Grids";
import beet from "../../assets/beet.jpg";
import broccoli from "../../assets/broccoli.jpg";
import celery from "../../assets/Celery.jpg";
import carrot from "../../assets/carrot.jpg";

function Home() {
  const classes = useStyles();
  const images = [
    { id: 1, name: "logo", img: beet, path: "/" },
    { id: 2, name: "about", img: broccoli, path: "/about" },
    { id: 3, name: "shop", img: carrot, path: "/shop" },
    { id: 4, name: "book", img: celery, path: "/book" },
  ];
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={1}>
        {images.map((image) => (
          <Grid item key={image.id} xs={6}>
            <Grids image={image} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Home;
