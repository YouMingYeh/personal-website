import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Box, Icon, Button } from "@material-ui/core";
import Typed from "react-typed";
import myPhoto from "../images/myPhoto.png";
import GetAppIcon from "@material-ui/icons/GetApp";

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
    transition: "transform 1s ease-in-out"
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
    "0%": {
    },
    "100%": {
      transform: "rotate(-45deg) translateX(20vw) translateY(-100vh)",
    },
  },
}));

const About = () => {
  const classes = useStyles();
  const downloadResume = () => {
    const link = document.createElement("a");
    link.download = `yehyouming's_resume.pdf`;
    link.href = "/resume.pdf";
    link.click();
  };

  const [isFlying, setIsFlying] = React.useState(false);

  const isMobile = window.innerWidth < 1000;

  return (
    <div className={classes.root} id="about">
      <Container maxWidth="md">
        <Box className={classes.container}>
          <Typography variant="h2" align="start" className={classes.title}>
            <p>I am </p>
            <Typed
              strings={[
                "葉又銘 You-Ming Yeh",
                "an Engineering Student.",
                "a Frontend Developer.",
                "an UI Designer.",
              ]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={1500}
              loop
              className={classes.typed}
              style={{ whiteSpace: !isMobile ? "nowrap" : "wrap" }}
            />
          </Typography>
          {!isMobile && (
            <img src={myPhoto} alt="My photo" className={classes.photo} />
          )}
        </Box>
        <Typography
          variant="body1"
          align="justify"
          className={classes.paragraph}
        >
          <Typed
            strings={["<span >Hi there!</span>"]}
            typeSpeed={50}
            contentType="html"
            className={classes.important}
            style={{ fontSize: "2.5rem" }}
            onComplete={(self) => self.cursor.remove()}
          />

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
            I've created several side projects{" "}
            <button
              className={`${classes.rocket} ${isFlying ? "fly" : ""}`}
              onClick={() => {
                setIsFlying(true);
              }}
            >
              🚀
            </button>{" "}
            and continuously worked on improving and maintaining them. 💻
          </p>
        </Typography>
        <Button onClick={downloadResume} className={classes.download}>
          Resume
          <GetAppIcon />
        </Button>
      </Container>
    </div>
  );
};

export default About;
