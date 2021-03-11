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
      
      
      {/* <div className="grid-container" style={styles.container}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div> */}
      
      <div className={classes.root}>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>

          </Grid>
         

      
      </div>
        

    </div>

    

  );

}

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }

}));


export default Radium(Home);