import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import BuildIcon from '@material-ui/icons/Build';
import BrushIcon from '@material-ui/icons/Brush';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import reactlogo from '/Users/harrisonreid/shirlene/src/reactlogo.png';
import Typing from 'react-typing-animation';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import './navbar.css';
import profile from './profile.jpeg';
import {Link} from "react-router-dom";
export const HomeRoute = "/";
export const CertsRoute = "/Certs/";
export const AnalysisRoute = "/Analysis/";
export const ContactRoute = "/Contact/";
export const FrontendRoute = "/Front-End/";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    zIndex:1200,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        color='white'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <h1 className='maintext'><Link to ='/'activeClassName='maintext' style={{ textDecoration: 'none' }}><Typing>Harrison Reid Portfolio</Typing></Link></h1>

        </Toolbar>
      </AppBar>

      {open? <ClickAwayListener onClickAway={handleDrawerClose}><Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <img className= 'profile' alt="Profile Picture" src={profile}/>
          <h4 className='leftalil'>Harrison Reid</h4>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <img className= 'profile' alt="Profile Picture" src={profile}/>
    
          
        </div>

        
        <Divider />
        <div className="menubar">
          <List>
            <ListItem button component={Link} to={AnalysisRoute}>
              <ListItemIcon><BuildIcon /></ListItemIcon>
              <ListItemText /> Data Analysis/Data Engineering
            </ListItem>
            <ListItem button component={Link} to={FrontendRoute}>
              <ListItemIcon><BrushIcon /></ListItemIcon>
              <ListItemText /> Front-End/Data Visualization
            </ListItem>
        </List>
        </div>
        <div>
        <Divider />
        <List>
              <ListItem button component={Link} to={CertsRoute}>
              <ListItemIcon><CardMembershipIcon /></ListItemIcon>
              <ListItemText /> Resume and Certifications
            </ListItem>
            <ListItem button component={Link} to={ContactRoute}>
              <ListItemIcon><MailIcon /></ListItemIcon>
          Contacts and Socials
            </ListItem>
        </List>
        </div>

        <div className="menufooter"><span className='firstext'>Made in <img className='reactlogo' alt="React Logo" src={reactlogo}/></span>
        <span className='secondtext'> by Harrison Reid</span>
        </div>

      </Drawer> 

      </ClickAwayListener>:<Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <img className= 'profile' alt="Profile Picture" src={profile}/>
          <h4 className='leftalil'>Harrison Reid</h4>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <img className= 'profile' alt="Profile Picture" src={profile}/>
    
          
        </div>

        
        <Divider />
        <div className="menubar">
          <List>
            <ListItem button component={Link} to={AnalysisRoute}>
              <ListItemIcon><BuildIcon /></ListItemIcon>
              <ListItemText /> Data Analysis/Data Engineering
            </ListItem>
            <ListItem button component={Link} to={FrontendRoute}>
              <ListItemIcon><BrushIcon /></ListItemIcon>
              <ListItemText /> Front-End/Data Visualization
            </ListItem>
        </List>
        </div>
        <div>
        <Divider />
        <List>
              <ListItem button component={Link} to={CertsRoute}>
              <ListItemIcon><CardMembershipIcon /></ListItemIcon>
              <ListItemText /> Resume and Certifications
            </ListItem>
            <ListItem button component={Link} to={ContactRoute}>
              <ListItemIcon><MailIcon /></ListItemIcon>
          Contacts and Socials
            </ListItem>
        </List>
        </div>

        <div className="menufooter"><span className='firstext'>Made in <img className='reactlogo' alt="React Logo" src={reactlogo}/></span>
        <span className='secondtext'> by Harrison Reid</span>
        </div>

      </Drawer> }
    </div>
  );
}
export default PersistentDrawerLeft;