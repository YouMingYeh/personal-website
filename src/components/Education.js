import React from "react";
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
import { useStyles } from "./styles/EducationStyles";

const StickyNote = ({ courses }) => {
  const classes = useStyles();

  return (
    <>
      {courses.map((course, index) => (
        <div
          className={classes.stickyNote}
          style={{
            top: 10 + index * 5 + "em",
            left: 5 + index * Math.floor(Math.random() * 5) + "em",
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
    },
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
