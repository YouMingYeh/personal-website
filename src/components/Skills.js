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

import { useStyles } from "./styles/SkillsStyles";

const Skills = () => {
  const classes = useStyles();

  const skillsData = [
    {
      skill: "程式語言",
      icon: <Code />,
      items: [
        {
          name: "HTML",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/240px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "Javascript",
          image:
            "https://static.javatpoint.com/images/javascript/javascript_logo.png",
        },
        {
          name: "TypeScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
        },
        {
          name: "C++",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png",
        },
        {
          name: "C",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/1200px-The_C_Programming_Language_logo.svg.png",
        },
        {
          name: "Python",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
        },
      ],
    },
    {
      skill: "前端開發工具與框架",
      icon: <Inventory2Icon />,
      items: [
        {
          name: "React",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        },
        {
          name: "Redux",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEW62HQELDScDqni-pTeCH9LWRb8FPxRchvSeaPkfjmn_LntMd3A8m8UdTJMrRSMkopc&usqp=CAU",
        },
        {
          name: "Material-UI",
          image: "https://mui.com/static/logo.png",
        },
        {
          name: "React Native",
          image:
            "https://www.datocms-assets.com/45470/1631026680-logo-react-native.png",
        },
        {
          name: "Tailwind.css",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
        },
        {
          name: "Vite",
          image: "https://www.svgrepo.com/show/374167/vite.svg",
        },
      ],
    },
    
    {
      skill: "後端框架與資料庫",
      icon: <DataObjectIcon />,
      items: [
        {
          name: "Node.js",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        },
        {
          name: "Express",
          image: "https://expressjs.com/images/express-facebook-share.png",
        },
        {
          name: "MongoDB & Mongoose",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Mongodb.png/1200px-Mongodb.png",
        },
      ],
    },
    {
      skill: "其他工具",
      icon: <Storage />,
      items: [
        {
          name: "Git",
          image:
            "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
        },
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        {
          name: "RESTful API",
          image:
            "https://www.payoda.com/wp-content/uploads/2021/05/1_mbP4Bjrs8Hshx7IgjsUNSg.jpeg",
        },
        {
          name: "firebase",
          image: "https://1.bp.blogspot.com/-zVNGq7J_pkI/V2zc3rYWySI/AAAAAAAAWsM/SxLC4c3n5_Q0DcQEbRE1oCbE20T4gHyuACKgB/s1600/firebase_logo_shot.png"
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
                <img
                  className={classes.item}
                  src={item.image}
                  alt={item.name}
                />
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
          {!isMobile && (
            <img
              src={require("../images/watchthis.png")}
              className={classes.image}
            ></img>
          )}
          Skills
        </Typography>
      </Container>
      <Slider {...settings}>{renderSkills()}</Slider>
    </div>
  );
};

export default Skills;
