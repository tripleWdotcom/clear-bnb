
import Radium from 'radium'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Filters from '../components/Filters'
import SearchComponent from '../components/Search'
import Results from '../components/Results';
import Calen from '../components/Calen';


const HomeResults = () => {
  const classes = useStyles();

  return (
    <div className="home">
      <div className={classes.root}>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Search component
            <SearchComponent />
              <Calen />
            </Paper>
          </Grid>


          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Filters /></Paper>
          </Grid>


          <Grid item sm={6}>
            <Paper className={classes.paper}>
              <Results />
            </Paper>
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


export default Radium(HomeResults);