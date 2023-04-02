import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Box, Icon, Button } from "@material-ui/core";
import Typed from "react-typed";
import myPhoto from "../images/myPhoto.png";
import GetAppIcon from '@material-ui/icons/GetApp';


const useStyles = makeStyles((theme) => ({
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
    position: 'relative',
  },
  container: {
    marginBottom: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "20rem",
  },
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: "bold",
    width: "70%",
    fontSize: "3.5em",
    zIndex: 1,
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
    "&:hover": {
      transform: "rotate(10deg) scale(1.2)",
    },
  },
  typed: {
    color: theme.palette.primary.main,

  },
  download: {
    position: "relative",
    color: 'white',
    width: 200,
    height: 50,
    fontSize: 25,
    borderRadius: 20,

    transform: 'translate(40vw, -20px) rotate(-10deg)',
    fontWeight: "bold",
    transition: "transform 1s ease-in-out",
    backgroundColor: theme.palette.primary.main,
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      transform:'translate(40vw, -20px) rotate(-5deg) scale(1.05)',
    }

  }
}));

const About = () => {
  const classes = useStyles();
  const downloadResume = () => {
    const link = document.createElement("a");
    link.download = `yehyouming's_resume.pdf`;
    link.href = "/resume.pdf";
    link.click();
  };

  return (
    <div className={classes.root} id="about">
      <Container maxWidth="md">
        <Box className={classes.container}>
        
          <img src={myPhoto} alt="My photo" className={classes.photo} />

          <Typography variant="h2" align="center" className={classes.title}>
            <p>I am </p>
            <Typed
              strings={[
                "葉又銘 Yeh-YouMing",
                "an Engineering Student.",
                "a Frontend Developer.",
                "an UI Designer.",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
              className={classes.typed}
            />
          </Typography>
        </Box>
        <Typography
          variant="body1"
          align="justify"
          className={classes.paragraph}
        >
          <Typed strings={["<span >Hi there!</span>"]} typeSpeed={50} contentType="html" className={classes.important} style={{ fontSize: '3rem' }} onComplete={(self)=>self.cursor.remove()}/>
          
          <img
            src={require("../images/hi.png")}
            style={{ height: "7rem" }}
          ></img>
          
          <br></br>
          <span>
            A student studying{" "}
            <span className={classes.important}>
              Information Management at NTU.{" "}
            </span>
          </span>
          <p>
            Passionate about
            <span className={classes.important}> Full Stack Web</span>
            <span className={classes.important}>, Software</span> development,
            and have taken relevant courses to hone my skills.
          </p>
          <p>
            I've created several side projects 🚀 and continuously worked on
            improving and maintaining them. 💻
          </p>
        </Typography>
        <Button  onClick={downloadResume}  className={classes.download}>
             Resume
            <GetAppIcon />
          </Button>
      </Container>
    </div>
  );
};

export default About;
