import Radium from 'radium'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import SearchComponent from '../components/Search'
import CityIconList from '../components/CityIconList'
import Calen from '../components/Calen';




const Home = () => {
 


  const classes = useStyles();
  return (
    <div className="home">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Search component
            <SearchComponent />
              <Calen />
            <br/><br/>
            </Paper>
          </Grid>
          <Hidden xsDown >
            <Grid item xs={12}>
              <Paper className={classes.paper}>Carousel component</Paper>
            </Grid>
          </Hidden>
          <Grid item xs={12}>
            <CityIconList />
          </Grid>
        </Grid>
      </div>
    </div>

  );

}

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    backgroundColor: '#383D59'
  },
  paper: {
    padding: theme.spacing(15),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#99AABF'
  }
}));


export default Radium(Home);