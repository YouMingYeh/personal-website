import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
  },
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: 'bold'
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 140,
  },
}));

const Projects = () => {
  const classes = useStyles();

  const projects = [
    {
      title: 'PDAO宣傳網站',
      description: '使用React Gatsby framework、Typescript，下製作的台大資管系程式競賽PDAO宣傳網站',
      image: require('../images/PDAO.JPG'),
      url: 'https://pdaowebsite.gatsbyjs.io/',
    },
    {
      title: 'BUJIO APP',
      description: '全端社群軟體，提供與好友、陌生人揪團、約會的媒合平台，熟悉使用 Redux.js、React Hooks',
      image: require('../images/BUJIO.png'),
      url: 'https://github.com/YouMingYeh/BUJIOAPP',
    }
  ];

  return (
    <div className={classes.root} id="projects">
      <Typography variant="h2" component="h2" align="center" className={classes.title}>
      Projects
      </Typography>
      <Grid container justifyContent="center">
        {projects.map((project) => (
          <Grid item key={project.title}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={project.image}
                  title={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={project.url}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
