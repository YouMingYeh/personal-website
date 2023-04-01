import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navLink: {
    marginLeft: theme.spacing(4),
    color: 'white',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">葉又銘</Typography>
        <div>
          <Button href="#about" className={classes.navLink}>關於我</Button>
          <Button href="#projects" className={classes.navLink}>Projects</Button>
          <Button href="#skills" className={classes.navLink}>Skills</Button>
          <Button href="#experience" className={classes.navLink}>Experience</Button>
          <Button href="#contact" variant="contained" color="secondary">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
