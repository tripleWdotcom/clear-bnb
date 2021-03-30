
import Radium from 'radium'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Filters from '../components/Filters.jsx'
import SearchComponent from '../components/Search'
import Results from '../components/Results';
import Calen from '../components/Calen';
import Hidden from '@material-ui/core/Hidden'
import { withMobileDialog } from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';
import { useState } from 'react';


const HomeResults = () => {
  const [show, setShow] = useState([])



  const toggleFilter = () => {
    show ? document.getElementById("filterMenu").style.height = "100vh" : document.getElementById("filterMenu").style.height = "0";
    setShow(!show)
  }

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

          <Hidden xsDown>
            <Grid item sm={4} md={4}>
              <Paper className={classes.paper2}>
                <Filters /></Paper>
            </Grid>
          </Hidden>


          <Grid item xs={12} sm={8} md={8}>
            <Paper className={classes.paper3}>
              <Results />
            </Paper>
          </Grid>

        </Grid>


      </div>
      <Hidden smUp>

        <Grid item xs={12} id='filterMenu' className={classes.filterContainer}>
          <Paper className={classes.paperMobile}>
            <Filters /></Paper>
        </Grid>
        <Grid item xs={12} className={classes.toggleFilters}>
          <Paper onClick={toggleFilter} >{show ? <span>Show filters</span> : <span>Hide Filters</span>}
          </Paper>
        </Grid>
      </Hidden>

    </div>

  );

}

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    backgroundColor: 'cyan'
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
  paper2: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'lightblue',
    // width:'30%'

  },
  paper3: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'lightblue',
  },
  paperMobile: {
    padding: theme.spacing(3),

    textAlign: 'center',

    backgroundColor: 'whitesmoke',
  },
  toggleFilters: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: 'grey',
    position: 'fixed',
    zIndex: 3,
    bottom: '0px',
    width: '100%'

  },

  filterContainer: {
    position: 'fixed',
    bottom: '0px',
    width: '100vw',
    zIndex: 3,
    transition: '0.5s',
    height: '0px'
  }

}));


export default Radium(HomeResults);