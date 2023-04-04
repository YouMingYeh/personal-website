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
    timeline: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(8),
        marginRight: theme.spacing(8),
      },
      [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing(16),
        marginRight: theme.spacing(16),
      },
    },
    timelineItem: {
      minHeight: 120,
    },
    timelineContent: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.secondary.main,
      borderRadius: theme.spacing(1),
    },
    stickyNote: {
      position: "relative",
      color: "white",
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1),
      borderRadius: theme.spacing(1),
      marginTop: theme.spacing(-3),
      marginLeft: theme.spacing(1),
      width: 250,
      zIndex: 1,
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        boxShadow: `4px 4px ${theme.palette.secondary.main}`,
        scale: 1.05,
      },
    },
  }));