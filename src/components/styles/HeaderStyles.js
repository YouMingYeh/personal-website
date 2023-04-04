import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
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
    },
    mobileMenu: {
      "& .MuiMenu-paper": {
        backgroundColor: theme.palette.primary.main,
        color: "white",
      },
    },
  }));