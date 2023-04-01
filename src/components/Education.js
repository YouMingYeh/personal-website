import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab'
import SchoolIcon from '@material-ui/icons/School';

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
    minHeight: '100vh',
  },
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: 'bold'
  },
  timeline: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8),
    },
    [theme.breakpoints.up('md')]: {
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
}));

const Education = () => {
  const classes = useStyles();

  const education = [
    {
      school: 'National Taiwan University',
      degree: 'Bachelor of Science in Information Management',
      period: 'Sep 2021 - Jun 2025',
      logo: 'https://www.ntu.edu.tw/images/about/emblem_1.png',
    },
  ];

  return (
    <div className={classes.root} id="education">
      <Typography variant="h2" component="h2" align="center" className={classes.title}>
        Education
      </Typography>
      <Timeline className={classes.timeline}>
        {education.map((item) => (
          <TimelineItem key={item.school} className={classes.timelineItem}>
            <TimelineSeparator>
              <TimelineDot color='inherit'>
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
