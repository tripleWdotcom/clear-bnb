
import Radium from 'radium'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Filters from '../components/Filters'

import Search from '../components/Search'


const HomeResults = () => {
  const classes = useStyles();

  return (
    <div className="home">
      <div className={classes.root}>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Search component
            <Search />
            </Paper>
          </Grid>


          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Filters /></Paper>
          </Grid>


          <Grid item sm={6}>
            <Paper className={classes.paper}>Show list of houses components
            Show list of houses components
            Show list of houses components
            Show list of houses components
            Show list of houses components
            Show list of houses components
            Show list of houses components
            Show list of houses components
            Show list of houses components
            Show list of houses components
            Show list of houses components
            Show list of houses components

            Show list of houses components
            Show list of houses components
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