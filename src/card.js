import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import './card.css';
import {Link} from "react-router-dom";
export const pdfRoute = "/Users/harrisonreid/shirlene/src/Pages/Home/PDF-View/pdf.js";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function ComplexGrid(props) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={props.cert} src={props.logoimg}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  {props.cert}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {props.id}
                </Typography>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
            <Grid item>
      <Button
        variant="contained"
        color="primary"
        className='certbutton'
        size="small"
        startIcon={<SaveIcon />}
        component={Link} 
        to={props.file}
      >
        <div>Download</div>
      </Button>
            </Grid>
          </Grid>
        </Grid>
        
        
      </Paper>
    </div>
  );
}
export default ComplexGrid;

