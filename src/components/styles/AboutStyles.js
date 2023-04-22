import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(20),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(24),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(28),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(32),
    },
    backgroundColor: theme.palette.background.default,
    minHeight: "120vh",
    position: "relative",
  },
  container: {
    marginBottom: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    height: "20rem",
  },
  title: {
    margin: 0,
    marginBottom: theme.spacing(4),
    fontWeight: "bold",
    position: "absolute",
    fontSize: "2em",
    zIndex: 1,
    transform: "translateX(-5vw)",
    left: "1rem",
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
    position: "absolute",
    marginBottom: theme.spacing(4),
    transition: "transform 1s ease-in-out",
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRight: `3px solid ${theme.palette.secondary.main}`,
    borderBottom: `3px solid ${theme.palette.secondary.main}`,
    right: "1rem",
  },
  typed: {
    color: theme.palette.primary.main,
  },
  resume: {
    position: "relative",
    color: "white",
    width: 200,
    height: 50,
    fontSize: 25,
    borderRadius: 20,

    transform: "translate(40vw, -20px) rotate(-10deg)",
    fontWeight: "bold",
    transition: "all 1s ease-in-out",
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRight: `3px solid ${theme.palette.secondary.main}`,
    borderBottom: `3px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      transform: "translate(40vw, -20px) rotate(-5deg) scale(1.05)",
      border: `3px solid ${theme.palette.secondary.main}`,
      borderRight: `6px solid ${theme.palette.secondary.main}`,
      borderBottom: `6px solid ${theme.palette.secondary.main}`,
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
