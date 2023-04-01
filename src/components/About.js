import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Box } from '@material-ui/core';
import Typed from 'react-typed';
import myPhoto from '../images/myPhoto.JPG';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    marginTop: theme.spacing(5)
  },
  container: {
    marginBottom: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20rem'
  },
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
    width: '80%',
  },
  paragraph: {
    marginBottom: theme.spacing(2),
    fontSize: '1.7rem'
  },
  photo: {
    width: '20%',
    maxWidth: '200px',
    borderRadius: '10rem',
    marginBottom: theme.spacing(4),
  },
  typed: {
    color: theme.palette.primary.main
  }
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="about">
      <Container maxWidth="md">
        <Box className={classes.container}>
          <img src={myPhoto} alt="My photo" className={classes.photo} />

          <Typography variant="h2" align="center" className={classes.title}>
          <p>I am a </p>
            <Typed
              strings={[' College Student.', ' Frontend Learner.', ' UI Design Learner.']}
              typeSpeed={50}
              backSpeed={30}
              loop
              className={classes.typed}
            />
          </Typography>
        </Box>
        <Typography variant="body1" align="justify" className={classes.paragraph}>
        您好，我是一名就讀於臺灣大學資訊管理學系大二的學生，對於前端網頁與軟體撰寫有濃厚的興趣，同時也修習過相關課程。在學期間，我製作了多個 side project 並持續改進與維護，期望透過這些經驗能夠為貴公司做出貢獻。
        </Typography>

      </Container>
    </div>
  );
};

export default About;
