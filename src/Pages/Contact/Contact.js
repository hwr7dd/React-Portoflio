import React,{Component} from 'react';
import './Contact.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
function Contact() {
    const classes = useStyles();
    return (
      <div className='main'>

        <Typography variant="h1" component="h2" gutterBottom>
      Contacts
        </Typography>
        <Typography variant="h3" gutterBottom>
        Email: hwr7dd@mail.missouri.edu
        </Typography>
        <div className={classes.root}>
          <Button
          variant="contained"
          color="primary"
          endIcon={<LinkedInIcon/>}
          target="_blank" 
          href="https://www.linkedin.com/in/harrisonreidprofile/"
          >
          My LinkedIn
          </Button>
          <Button
          variant="contained"
          color="primary"
          endIcon={<GitHubIcon/>}
          className='github'
          target="_blank" 
          href="https://github.com/hwr7dd"
          >
          My Github
          </Button>
        </div>

    </div>
    );
  }
  export default Contact;