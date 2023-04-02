import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import { useForm } from '@formspree/react';

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
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    margin: '0 auto',
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
    }
  },
  image: {
    maxWidth: '3em',
    animation: '$rotateAndScale 2s ease-in-out infinite',
  },
  '@keyframes rotateAndScale': {
    '0%': {
      transform: 'rotate(0deg) scale(1)',
    },
    '50%': {
      transform: 'rotate(-10deg) scale(1.2)',
    },
    '100%': {
      transform: 'rotate(0deg) scale(1)',
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  const [state, submit] = useForm('mnqygzeg');
  const { succeeded, submitting } = state;

  const isMobile = window.innerWidth < 600;
  return (
    <div className={classes.root} id="contact">
      <Typography variant="h2" component="h2" align="center" className={classes.title}>
        Contact Me
        {!isMobile ? <img src={require('../images/callme.png')} className={classes.image}></img> : <></>}
      </Typography>
      <div>

      <form className={classes.form} noValidate autoComplete="off" onSubmit={submit}>
        {submitting ? (
          <Button disabled variant="contained" color="primary">
            Sending...
          </Button>
        ) : succeeded ? (
          <Typography variant="h5" component="p" align="center">
            Thank you for your message! I will get back to you soon.
          </Typography>
        ) : (
          <>
            <TextField id="name" label="Name" variant="outlined" fullWidth required name="name" />
            <TextField id="email" label="Email" variant="outlined" fullWidth required name="email" />
            <TextField id="subject" label="Subject" variant="outlined" fullWidth required name="subject" />
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              multiline
              rows={6}
              fullWidth
              required
              name="message"
            />
            <Button type="submit" variant="contained" color="primary">
              Send
            </Button>
          </>
        )}
      </form>
      </div>
      
    </div>
  );
};

export default Contact;
