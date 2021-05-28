import React from "react";
import { Card, CardMedia, CardActionArea} from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";

function Grids({ image }) {
  const classes = useStyles();
  const { path } = image

  return (
    <Card>
      <CardActionArea
        className={classes.root}
        component={Link}
        to={`${path}`}
      >
        <CardMedia
          className={classes.media}
          image={image.img}
          title={image.name}
        />
      </CardActionArea>
    </Card>
  );
}

export default Grids;
