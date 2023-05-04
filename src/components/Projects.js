import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import { useStyles } from "./styles/ProjectsStyles";

const Projects = () => {
  const classes = useStyles();
  const imageRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // set data-animate attribute to true when image is in view
          entry.target.setAttribute("data-animate", "true");
        } else {
          entry.target.removeAttribute("data-animate");
        }
      });
    });
    observer.observe(imageRef.current);

    // cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: "PDAO Promotional Website",
      description:
        "The promotional website for the NTU Department of Information Management programming contest PDAO, created using the React Gatsby framework and TypeScript.",
      image: require("../images/PDAO.JPG"),
      url: "https://pdaowebsite.gatsbyjs.io/",
    },
    {
      title: "BUJIO APP",
      description:
        "Full-stack community software that provides a matching platform for organizing group activities and dates with friends and strangers. Familiar with using Redux.js and React Hooks.",
      image: require("../images/BUJIO.png"),
      url: "https://github.com/YouMingYeh/BUJIOAPP",
    },
    {
      title: "Task Manager",
      description:
        "An application that helps users manage GitHub tasks. Users can create, edit, or delete tasks (GitHub issues API) in the application.",
      image: require("../images/GitHub.jpeg"),
      url: "https://github.com/Dcard-Intern-Homework/TaskAPI",
    },
    {
      title: "Personal Website",
      description:
        "Check LEARN MORE to view this personal website repo details!",
      image: require("../images/hello.png"),
      url: "https://github.com/YouMingYeh/Portfolio",
    },
    {
      title: "Linker",
      description:
        "Using vite-plugin-ssr and Tailwind css to build a website that can link to some regular used websites by myself.",
      image: require("../images/icon.png"),
      url: "https://linker-eight.vercel.app/",
    },
    {
      title: "Text Base Math Calculator",
      description: 
        "Using Electron to build a text base math calculator for PC appplication.",
      image: null,
      url: "https://github.com/YouMingYeh/text-base-math-calculator"
    }
  ];

  const isMobile = window.innerWidth < 1000;

  return (
    <div className={classes.root} id="projects">
      <div>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          className={classes.title}
        >
          Projects
          <img
            src={require("../images/think.png")}
            className={classes.image}
            ref={imageRef}
          ></img>
        </Typography>
      </div>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.gridContainer}
        style={{ maxWidth: isMobile ? "100vw" : "75vw" }}
      >
        {projects.map((project) => (
          <Grid item key={project.title}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={project.image}
                  title={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={project.url}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
