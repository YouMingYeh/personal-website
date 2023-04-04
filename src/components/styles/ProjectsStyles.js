import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: theme.spacing(8),
      [theme.breakpoints.up("sm")]: {
        paddingTop: theme.spacing(10),
      },
      [theme.breakpoints.up("md")]: {
        paddingTop: theme.spacing(12),
      },
      [theme.breakpoints.up("lg")]: {
        paddingTop: theme.spacing(14),
      },
      backgroundColor: theme.palette.background.default,
      minHeight: "100vh",
      position: "relative",
    },
    title: {
      marginBottom: theme.spacing(4),
      fontWeight: "bold",
      position: "relative",
    },
    card: {
      maxWidth: 345,
      margin: theme.spacing(2),
      transition: "transform .2s",
      borderRadius: "20px",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    media: {
      height: 140,
    },
    image: {
      position: "absolute",
      top: 0,
      right: 0,
      transform: "translate(0,-10vh)",
      zIndex: 1,
      maxWidth: "30vw",
      transition: "transform 1s ease-in-out",
      // use a data attribute to identify the image
      '&[data-animate="true"]': {
        transform: "rotate(-10deg) scale(1.2)",
      },
    },
    gridContainer: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    },
  }));