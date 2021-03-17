import Radium from 'radium'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import SearchComponent from '../components/Search'
import CityIconList from '../components/CityIconList'
import { RangePicker } from '../components/Calendar';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useState } from 'react'



const Home = () => {
  const classes = useStyles();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  let sd=state[0].startDate
  let ed = state[0].endDate
  console.log("start date: ", state[0].startDate," In timestamp:", sd.getTime())
  console.log("end date:", state[0].endDate," In timestamp:", (ed?ed.getTime():"Not defined yet"))

  return (
    <div className="home">
      <div className={classes.root}>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Search component
            <SearchComponent />
              <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
              >
         
           

              </DateRange>
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
    backgroundColor: '#99AABF',

  }

}));


export default Radium(Home);