import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper } from "@material-ui/core";
import { Code, Storage, GitHub } from "@material-ui/icons";
import DataObjectIcon from "@mui/icons-material/DataObject";
import Inventory2Icon from "@mui/icons-material/Inventory2";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
  },
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: "bold",
  },
  skillItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(3),
    height: "100%",
    cursor: "pointer", // add cursor pointer to indicate hover state
    transition: "all 0.3s ease-in-out", // add CSS transition
    transform: "scale(0.8)", // set initial scale
    opacity: 1, // set initial opacity
  },
  skillItemHovered: {
    transform: "scale(1)",
    opacity: 1,
  },
  skillTitle: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(1),
    fontSize: "3rem",
  },
  itemsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  },
  item: {
    margin: theme.spacing(1),
    fontSize: "1.2rem",
  },
}));

const Skills = () => {
  const classes = useStyles();

  const skillsData = [
    {
      skill: "程式語言",
      icon: <Code />,
      items: ["HTML", "CSS", "Javascript", "TypeScript"],
    },
    {
      skill: "前端框架",
      icon: <DataObjectIcon />,
      items: ["React", "React Native", "React Gatsby"],
    },
    {
      skill: "後端框架",
      icon: <Storage />,
      items: ["Node.js", "Express", "RESTful API"],
    },
    { skill: "Database", icon: <GitHub />, items: ["MongoDB"] },
    {
      skill: "第三方套件",
      icon: <Inventory2Icon />,
      items: [
        "Google API",
        "GitHub API",
        "MUI",
        "Redux.js",
        "JSON Web Token",
        "Multer",
        "Bcrypt",
        "JWT-decode",
        "Mongoose",
      ],
    },
  ];
  

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div className={classes.root} id="skills">
      <Typography
        variant="h2"
        component="h2"
        align="center"
        className={classes.title}
      >
        Skills
      </Typography>
      <Grid container spacing={4} justifyContent='center'>
        {skillsData.map((skill, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              className={`${classes.skillItem} ${
                hoveredIndex === index ? classes.skillItemHovered : classes.skillItem
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={classes.skillTitle}>
                {skill.icon}
                </div>
                <Typography variant="h5">
                  
                    <div className={classes.itemsContainer}>
                      {skill.items.map((item, itemIndex) => (
                        <Typography
                          variant="subtitle1"
                          key={itemIndex}
                          className={classes.item}
                        >
                          {item}
                        </Typography>
                      ))}
                    </div>
                  
                </Typography>
              
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Skills;
