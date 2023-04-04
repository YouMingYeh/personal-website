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
    container: {
      marginBottom: theme.spacing(4),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "20rem",
    },
    title: {
      margin: 0,
      marginBottom: theme.spacing(4),
      fontWeight: "bold",
      width: "70%",
      fontSize: "3em",
      zIndex: 1,
      transform: "translateX(-5vw)",
    },
    paragraph: {
      marginBottom: theme.spacing(0),
      fontSize: "1.7em",
      paddingBottom: theme.spacing(4),
    },
    important: {
      fontWeight: "bold",
      color: theme.palette.secondary.main,
    },
    photo: {
      width: "20%",
      scale: 1.8,
      borderRadius: "3rem",
      marginBottom: theme.spacing(4),
      transition: "transform 1s ease-in-out",
    },
    typed: {
      color: theme.palette.primary.main,
    },
    download: {
      position: "relative",
      color: "white",
      width: 200,
      height: 50,
      fontSize: 25,
      borderRadius: 20,
  
      transform: "translate(40vw, -20px) rotate(-10deg)",
      fontWeight: "bold",
      transition: "all 1s ease-in-out",
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        transform: "translate(40vw, -20px) rotate(-5deg) scale(1.05)",
        boxShadow: `4px 4px ${theme.palette.secondary.main}`,
      },
    },
    rocket: {
      cursor: "pointer",
      transition: "transform 0.3s ease-in-out",
      padding: 0,
      border: "none",
      background: "none",
      fontSize: "30px",
      "&.fly": {
        animation: "$fly 1s linear",
        animationFillMode: "forwards",
      },
    },
    "@keyframes fly": {
      "0%": {},
      "100%": {
        transform: "rotate(-45deg) translateX(20vw) translateY(-100vh)",
      },
    },
  }));