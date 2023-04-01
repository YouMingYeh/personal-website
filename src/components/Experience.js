import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Divider,
  Button,
} from "@material-ui/core";
import { Code, Storage, GitHub } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    
  },
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: "bold",
  },
  experienceCard: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadows[3],
    transition: "box-shadow 0.2s ease-in-out",
    "&:hover": {
      boxShadow: theme.shadows[6],
      cursor: "pointer",
    },
  },
  experienceCardContent: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(1),
    fontSize: "3rem",
  },
  divider: {
    width: "100%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
}));

const Experience = () => {
  const classes = useStyles();

  const experienceData = [
    {
      company: "臺大資管系全國程式競賽PDAO",
      position: "系統組",
      icon: <Code />,
      link: "https://pdaowebsite.gatsbyjs.io/",
      description:
        "使用 Gatsby 框架、Typescript，以原生 HTML、CSS、JavaScript 語言撰寫。",
      details:
        "負責開發 PDAO 官方網站的前端部分，包括使用 React、Material-UI 等技術實現responsive設計、動畫效果。除了架設宣傳網站，也負責串接judge系統API，用於比賽的計分板等",
    },
    {
      company: "Side Projects",
      position: "大學生",
      icon: <Code />,
      link: "https://github.com/YouMingYeh",
      description:
        "製作多個Side Projects，包括網路社交軟體BUJIO、多個在學期間修課專案、個人網站",
      details:
        "熟悉各種前後端框架、第三方套件，並有全端專案製作經驗，擅長串接現成API",
    },
  ];

  return (
    <Box id="experience" className={classes.root}>
      <Typography variant="h2" align="center" className={classes.title}>
        Experience
      </Typography>
      <Grid container spacing={3} justifyContent='center'>
        {experienceData.map((experience) => (
          <Grid item xs={12} sm={6} md={4} key={experience.company}>
            <Card
              className={classes.experienceCard}
              component="a"
              href={experience.link}
              target="_blank"
            >
              <CardContent className={classes.experienceCardContent}>
                <Box className={classes.iconBox}>
                  {experience.icon}
                  <Typography variant="h5">{experience.company}</Typography>
                </Box>
                <Typography variant="subtitle1" align="center">
                  {experience.position}
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant="body1" align="center">
                  {experience.description}
                </Typography>
                <Typography variant="body2" align="center">
                  {experience.details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<GitHub />}
          component="a"
          href="https://github.com/yourusername"
          target="_blank"
        >
          GitHub
        </Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<Storage />}
          component="a"
          href=""
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          Portfolio
        </Button>
      </Box>
    </Box>
  );
};

export default Experience;
