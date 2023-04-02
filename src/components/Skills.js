import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Tooltip } from "@material-ui/core";
import { Code, Storage, GitHub } from "@material-ui/icons";
import DataObjectIcon from "@mui/icons-material/DataObject";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Card } from "@mui/material";
import clsx from "clsx";
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
    position: "relative"
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
    height: "30rem",
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
    scale: "1.5",
  },
  itemsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  item: {
    margin: theme.spacing(),
    height: '5rem',
    width: '5rem',
    
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: '5rem',
  }
}));

const Skills = () => {
  const classes = useStyles();

  const skillsData = [
    {
      skill: "程式語言",
      icon: <Code />,
      items: [
        {
          name: "HTML",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
        },
        {
          name: "CSS",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/240px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "Javascript",
          image: "https://static.javatpoint.com/images/javascript/javascript_logo.png",
        },
        {
          name: "TypeScript",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
        },
        {
          name: "C++",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png"
        },
        {
          name: "C",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/1200px-The_C_Programming_Language_logo.svg.png"
        },
        {
          name: "Python",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
        }
      ],
    },
    {
      skill: "前端框架",
      icon: <Inventory2Icon />,
      items: [
        {
          name: "React",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        },
        {
          name: "Redux",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEW62HQELDScDqni-pTeCH9LWRb8FPxRchvSeaPkfjmn_LntMd3A8m8UdTJMrRSMkopc&usqp=CAU",
        },
        {
          name: "Material-UI",
          image: "https://mui.com/static/logo.png",
        },
        {
          name: "React Native",
          image: "https://www.datocms-assets.com/45470/1631026680-logo-react-native.png",
        },
      ],
    },
    {
      skill: "後端框架與資料庫",
      icon: <DataObjectIcon />,
      items: [
        {
          name: "Node.js",
          image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        },
        {
          name: "Express",
          image: "https://expressjs.com/images/express-facebook-share.png",
        },
        {
          name: "MongoDB & Mongoose",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Mongodb.png/1200px-Mongodb.png",
        },

      ],
    },
    {
      skill: "其他工具",
      icon: <Storage />,
      items: [
        {
          name: "Git",
          image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
        },
        {
          name: "GitHub",
          image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        {
          name: "RESTful API",
          image: "https://www.payoda.com/wp-content/uploads/2021/05/1_mbP4Bjrs8Hshx7IgjsUNSg.jpeg"
        }
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
              <Tooltip title={item.name}>
                <img className={classes.item} src={item.image} alt={item.name} />
              </Tooltip>
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

  const isMobile = window.innerWidth < 1000;
  return (
    <div id="skills" className={classes.root}>
      <Container>
        <Typography className={classes.title} variant="h2" align="center">
        {!isMobile && <img src={require('../images/watchthis.png')} className={classes.image}></img>}
          Skills
          
        </Typography>
      </Container>
      <Slider {...settings}>{renderSkills()}</Slider>
    </div>
  );
};

export default Skills;
