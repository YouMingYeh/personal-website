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
  },
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "600px",
    margin: "0 auto",
    "& .MuiTextField-root": {
      marginBottom: theme.spacing(2),
    },
  },
  image: {
    maxWidth: "3em",
    animation: "$rotateAndScale 2s ease-in-out infinite",
  },
  "@keyframes rotateAndScale": {
    "0%": {
      transform: "rotate(0deg) scale(1)",
    },
    "50%": {
      transform: "rotate(-10deg) scale(1.2)",
    },
    "100%": {
      transform: "rotate(0deg) scale(1)",
    },
  },
  button: {
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRight: `3px solid ${theme.palette.secondary.main}`,
    borderBottom: `3px solid ${theme.palette.secondary.main}`,
  },
}));
