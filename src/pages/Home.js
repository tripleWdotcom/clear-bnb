import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import SearchComponent from '../components/Search'
import CityIconList from '../components/CityIconList'
import Calen from '../components/Calen';
import Ok from '../components/Carousel.jsx'
import { UserContext } from '../contexts/UserContext'
import { useEffect, useContext } from 'react'

const Home = () => {
 
  const { whoIsLoggedIn } = useContext(UserContext)

  useEffect(async () => {
    await whoIsLoggedIn()
  }, [])


  const classes = useStyles();
  return (
    <div className="home">
      <div className={classes.root}>
        <Grid container direction='column' spacing={3}>
          <Hidden xsDown>

            <Grid item sm={12} md={12}>
              <Paper className={classes.searchAndCalenDesktop}>
                 <SearchComponent />
                <Calen />
              </Paper>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item xs={12}>
              <Paper className={classes.searchAndCalenMobile}>
                <SearchComponent />
                <Calen />
              </Paper>
            </Grid>

          </Hidden>      
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <Ok /></Paper>
            </Grid>    
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
    backgroundColor: 'transparent'
  },
  searchAndCalenDesktop: {
    padding: theme.spacing(6),
    color: theme.palette.text.secondary,
    backgroundColor: 'white',
    borderRadius: '20px',
    textAlign: '-webkit-center'
  },
  searchAndCalenMobile: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    backgroundColor: 'white',
    borderRadius: '20px',
    textAlign: '-webkit-center'
  },
  paper:{
    
    backgroundColor: 'transparent',
  }
}));


export default Home;