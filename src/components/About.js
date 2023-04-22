import React from "react";
import { useStyles } from "./styles/AboutStyles";
import { Container, Typography, Box, Icon, Button } from "@material-ui/core";
import Typed from "react-typed";
import myPhoto from "../images/myPhoto.png";
import GetAppIcon from "@material-ui/icons/GetApp";

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
      <Container>
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
        <Button onClick={downloadResume} className={classes.resume}>
          Resume
          <GetAppIcon />
        </Button>
      </Container>
    </div>
  );
};

export default About;
