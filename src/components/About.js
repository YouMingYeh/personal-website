import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Box, Icon } from "@material-ui/core";
import Typed from "react-typed";
import myPhoto from "../images/myPhoto.JPG";

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
    width: "80%",
    fontSize: "3.5em"
  },
  paragraph: {
    marginBottom: theme.spacing(0),
    fontSize: "1.7rem",
    paddingBottom: theme.spacing(4)
  },
  important: {
    fontWeight: "bold",
    color: theme.palette.secondary.main,
  },
  photo: {
    width: "20%",
    maxWidth: "200px",
    
    borderRadius: "10rem",
    marginBottom: theme.spacing(4),
  },
  typed: {
    color: theme.palette.primary.main,
  },
}));

const About = () => {
  const classes = useStyles();

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
          <span className={classes.important} style={{ fontSize: "3rem" }}>
            Hi there! 🙋‍♂️
          </span>
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
      </Container>
    </div>
  );
};

export default About;
