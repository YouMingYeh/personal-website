import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import { Code, Storage, GitHub } from "@material-ui/icons";
import DataObjectIcon from "@mui/icons-material/DataObject";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Container, Card} from "@mui/material"
import clsx from 'clsx'
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(10),
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(12),
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(14),
    },
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
  },
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    height: '30rem'
  },
  skillItemHovered: {
    transform: "scale(1)",
    opacity: 1,
  },
  skillTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(1),
    scale: '1.5'
  },
  itemsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    margin: theme.spacing(1),
    fontSize: "1.2rem",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
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
        "Webpack",
      ],
    },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleSkillHover = (index) => {
    setHoveredSkill(index);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  const renderSkills = () => {
    return skillsData.map((skill, index) => {
      const isHovered = hoveredSkill === index;

      return (
        <Paper
          key={skill.skill}
          className={clsx(classes.skillItem, {
            [classes.skillItemHovered]: isHovered,
          })}
          onMouseEnter={() => handleSkillHover(index)}
          onMouseLeave={handleSkillLeave}
        >
          <div className={classes.skillTitle}>
            {skill.icon && <span className={classes.icon}>{skill.icon}</span>}
            <Typography variant="h6">{skill.skill}</Typography>
          </div>
          <div className={classes.itemsContainer}>
            {skill.items.map((item) => (

                <Typography
                  key={item}
                  className={classes.item}
                  variant="body1"
                  color={isHovered ? "secondary" : "textPrimary"}
                >
                  {item}
                </Typography>

            ))}
          </div>
        </Paper>
      );
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="skills" className={classes.root}>
      <Container >
        <Typography className={classes.title} variant="h2" align="center">
          Skills
        </Typography>
        <Slider {...settings} >{renderSkills()}</Slider>
      </Container>
    </div>
  );
};

export default Skills;
