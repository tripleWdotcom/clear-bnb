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
          <Hidden xsDown>

            <Grid item sm={12} md={12}>
              <Paper className={classes.searchAndCalenDesktop}>Search component desktop
                 <SearchComponent />
                <Calen />
              </Paper>
            </Grid>
          </Hidden>

          <Hidden smUp>
            <Grid item xs={12}>
              <Paper className={classes.searchAndCalenMobile}>Search component in mobile
                <SearchComponent />
                <Calen />
              </Paper>
            </Grid>

          </Hidden>
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
  searchAndCalenDesktop: {
    padding: theme.spacing(6),
    color: theme.palette.text.secondary,
    backgroundColor: 'lightblue',
    textAlign: '-webkit-center'
  },
  searchAndCalenMobile: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    backgroundColor: 'lightblue',
    textAlign: '-webkit-center'
  },
}));


export default Radium(Home);