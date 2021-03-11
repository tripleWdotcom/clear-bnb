import Radium from 'radium'
import Media from 'react-media';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const Home = () => {
  const classes = useStyles();
  
  return (
    <div className="home">
      <h2>Homepage</h2>
      
      
      <div className={classes.root}>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Search bar</Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>Carousel</Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>Cities</Paper>
          </Grid>
          

          </Grid>
         
      
      </div>
        
    </div>

  );

}

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    backgroundColor: 'cyan'
  },
  paper: {
    padding: theme.spacing(15),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'lightblue',
    
  }

}));


export default Radium(Home);