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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  skillItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(3),
    height: "100%",
    cursor: "pointer", // add cursor pointer to indicate hover state
    transition: "all 0.3s ease-in-out 0.2s", // add CSS transition
    scale: 0.8, // set initial scale
    opacity: 1, // set initial opacity
    height: "30rem",
    borderRadius: "50px",
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: `5px 10px ${theme.palette.primary.main}`,
  },
  skillItemHovered: {
    transform: "rotate(5deg) translateY(-30px)",
    boxShadow: `8px 20px ${theme.palette.primary.main}`,
    opacity: 1,
  },
  skillTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(1),
    scale: "1.5",
  },
  itemsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  item: {
    margin: theme.spacing(2),
    height: "5rem",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "5rem",
  },
}));
