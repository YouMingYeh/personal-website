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
import { Code, Storage, GitHub, Facebook } from "@material-ui/icons";

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
  },
  experienceCard: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadows[3],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),

    transition: "box-shadow 0.2s ease-in-out",
    "&:hover": {
      boxShadow: theme.shadows[6],
      cursor: "pointer",
      transform: 'scale(1.05)'
    },
    textDecoration: "none"
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
    fontSize: '2rem'
  },
  icon: {
    marginRight: theme.spacing(1),
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
      icon: "💻",
      link: "https://pdaowebsite.gatsbyjs.io/",
      description:
        "使用 Gatsby 框架、Typescript，以原生 HTML、CSS、JavaScript 語言撰寫。",
      details:
        "負責開發 PDAO 官方網站的前端部分，包括使用 React、Material-UI 等技術實現responsive設計、動畫效果。除了架設宣傳網站，也負責串接judge系統API，用於比賽的計分板等",
    },
    {
      company: "Side Projects",
      position: "學生",
      icon: "📂",
      link: "https://github.com/YouMingYeh",
      description:
        "製作多個Side Projects，包括網路社交軟體BUJIO、多個在學期間修課專案、個人網站",
      details:
        "熟悉各種前後端框架、第三方套件，並有全端專案製作經驗，擅長串接現成API",
    },
    {
      company: "臺大資管新生迎新宿營",
      position: "召部",
      icon: "⛺",
      link: "",
      description:
        "舉辦臺大資管新生迎新宿營",
      details:
        "透過舉辦活動學習管理團隊、與他人合作",
    },
  ];

  return (
    <Box id="experience" className={classes.root}>
      <Typography variant="h2" align="center" className={classes.title}>
        Experience
      </Typography>
      <Grid container spacing={3} justifyContent='center' style={{flexWrap: 'wrap'}}>
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
        <Button
          variant="contained"
          color="primary"
          endIcon={<Facebook />}
          component="a"
          href="https://www.facebook.com/profile.php?id=100010253504873"
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          Facebook
        </Button>
      </Box>
    </Box>
  );
};

export default Experience;