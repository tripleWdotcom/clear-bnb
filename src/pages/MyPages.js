import React, { useState } from 'react';
import Bookings from '../components/MyPages/Bookings.js'
import MyRentals from '../components/MyPages/MyRentals.js'
import AddNewRental from '../components/MyPages/AddNewRental.js'
import Radium from 'radium'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

function MyPage() {

  const classes = useStyles();
  const [action, setAction] = useState('showBookings')

  return (
    <div className={classes.root}>

      <Grid container spacing={3}>
        <Hidden xsDown >
          <Grid item xs={3}>
            <div className="leftPage" >
              <h3 className="myPageLinks" key="1" style={leftPageStyle} onClick={() => setAction('showBookings')}>Bookings</h3>
              <h3 className="myPageLinks" key="2" style={leftPageStyle} onClick={() => setAction('showRentals')}>My rentals</h3>
              <h3 className="myPageLinks" key="3" style={leftPageStyle} onClick={() => setAction('addNewRental')}>Add new rental</h3>
            </div >
          </Grid>
        </Hidden>
        <Grid item xs={9}>
          <div className="rightPage">
            {action === 'showBookings' && <Bookings />}
            {action === 'showRentals' && <MyRentals />}
            {action === 'addNewRental' && <AddNewRental />}
          </div>
        </Grid>
      </Grid>
    </div>

  )
}

const leftPageStyle = {
  margin: '1em',
  padding: '15px',
  borderRight: '1px solid black',
  cursor: 'pointer',  
  ':hover': {
    color: 'rgba(255, 166, 0, 0.664)',
  }
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

export default Radium(MyPage);
