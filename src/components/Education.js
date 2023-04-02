import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import SchoolIcon from "@material-ui/icons/School";

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
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: "bold",
  },
  timeline: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8),
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(16),
      marginRight: theme.spacing(16),
    },
  },
  timelineItem: {
    minHeight: 120,
  },
  timelineContent: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.spacing(1),
  },
  stickyNote: {
    position: "relative",
    color: "white",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(-3),
    marginLeft: theme.spacing(1),
    width: 250,
    zIndex: 1,
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      boxShadow: `4px 4px ${theme.palette.secondary.main}`,
      scale: 1.05
    },
  },
}));

const StickyNote = ({ courses }) => {
  const classes = useStyles();

  return (
    <>
      {courses.map((course, index) => (
        <div
          className={classes.stickyNote}
          style={{
            top: 10 + index * 5 + "em",
            left: 5+ index * Math.floor(Math.random()*5) + "em",
            transform: `rotate(${Math.floor(Math.random() * 10) - 5}deg)`,
          }}
        >
          <Typography variant="h6" component="h3" color="white">
            {course.name}
          </Typography>
          <Typography variant="body2" key={course.name} color="white">
            {course.level}
          </Typography>
        </div>
      ))}
    </>
  );
};

const Education = () => {
  const classes = useStyles();
  const isMobile = window.innerWidth < 1000;
  const education = [
    {
      school: "National Taiwan University",
      degree: "Bachelor of Science in Information Management",
      period: "Sep 2021 - Jun 2025",
      logo: "https://www.ntu.edu.tw/images/about/emblem_1.png",
    },
  ];
  const courses = [
    {
      name: "Web Programming",
      level: "A",
    },
    {
      name: "Algorithm",
      level: "A",
    },
    {
      name: "Data Structure",
      level: "A+",
    },
    {
      name: "Programming Design",
      level: "A+",
    },
    {
      name: "Linear Algebra",
      level: "A+",
    }
  ];

  return (
    <div className={classes.root} id="education">
      <Typography
        variant="h2"
        component="h2"
        align="center"
        className={classes.title}
      >
        Education
      </Typography>
      {!isMobile && <StickyNote courses={courses} />}
      <Timeline className={classes.timeline}>
        {education.map((item) => (
          <TimelineItem key={item.school} className={classes.timelineItem}>
            <TimelineSeparator>
              <TimelineDot color="inherit">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <img src={item.logo} alt={item.school} style={{ maxWidth: 80 }} />
              <Typography variant="h6" component="h3">
                {item.school}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {item.degree}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {item.period}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Education;
