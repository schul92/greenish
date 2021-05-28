import { colors } from "@material-ui/core";
import { lightGreen } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    display: "flex",
    height: "100vh",
    width: "50vw",
    justifyContent: "center",
  },
}));
