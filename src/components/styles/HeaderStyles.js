import { makeStyles } from "@material-ui/core/styles";
import { useHover } from "use-events";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    borderTop: `3px solid ${theme.palette.secondary.main}`,
    borderBottom: `3px solid ${theme.palette.secondary.main}`,
  },
  navLink: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),

    color: "white",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  img: {
    "&:hover": {
      color: theme.palette.secondary.main,
      cursor: "pointer",
    },
    padding: 0,
    maxWidth: theme.spacing(6),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRight: `3px solid ${theme.palette.secondary.main}`,
    borderBottom: `3px solid ${theme.palette.secondary.main}`,
  },
  mobileMenu: {
    "& .MuiMenu-paper": {
      backgroundColor: theme.palette.secondary.main,
      color: "white",
    },
  },
}));
