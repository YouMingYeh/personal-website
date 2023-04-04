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
    },
    experienceCard: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: theme.shadows[3],
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      borderRadius: "30px",
      transition: "all 0.3s ease-in-out 0.2s",
      "&:hover": {
        cursor: "pointer",
        transform: "rotate(3deg) translateY(-20px)",
        boxShadow: `8px 16px ${theme.palette.primary.main}`,
      },
      textDecoration: "none",
    },
    experienceCardContent: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    iconBox: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(2),
      fontSize: "2em",
    },
    icon: {
      marginRight: theme.spacing(1),
    },
    divider: {
      width: "100%",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(2),
    },
  }));