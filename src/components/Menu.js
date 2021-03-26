import Radium from 'radium'
import { useEffect, useState } from 'react'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import Burger from '../components/Hamburger.jsx'
import Fade from '@material-ui/core/Fade';
import React from 'react';


function MenuContainer(props) {

  const sendNewAction = (newAction) => {
    props.getNewAction(newAction)
  }

   const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <Hidden smUp>
        <Grid container direction="column" style={style.containerMobile} key="1" justify="space-around">
          <div className="mainM" style={style.mainM}>
        
           
          <Grid item xs>
            <h4 style={style.titleMobile} key="2" onClick={() => { sendNewAction('showBookings') }}>My bookings</h4>
          </Grid>
          <Grid item xs><h4 style={style.titleMobile} key="3" onClick={() => { sendNewAction('showRentals') }}>My Rentals</h4></Grid>
            <Grid item xs><h4 style={style.titleMobile} key="4" onClick={() => { sendNewAction('showNewRental') }}>Add new rental</h4></Grid>
       
           </div>
        </Grid>
      </Hidden>

      <Hidden xsDown>
       
        <Grid container spacing={3} direction="column" style={style.containerDesktop} key="5">
          <Grid item xs>
            <h3 style={style.titleDesktop} key="6" onClick={() => { sendNewAction('showBookings') }}>My bookings</h3>
          </Grid>
          <Grid item xs><h3 style={style.titleDesktop} key="7" onClick={() => { sendNewAction('showRentals') }}>My rentals</h3></Grid>
          <Grid item xs><h3 style={style.titleDesktop} key="8" onClick={() => { sendNewAction('showNewRental') }}>Add new rental</h3></Grid>
        </Grid>
      </Hidden>




    </>
  )
}

export default Radium(MenuContainer)

const style = {
  color: 'white',
  containerMobile: {
     backgroundColor: 'white',
     zIndex: '10',
     position: 'fixed',
     width: 'fit-content',


  },
  titleMobile: {
    padding: '10px 5px 10px 5px',
    color: 'black',
    cursor: 'pointer',
    margin: '0 1px',
    ':hover': {
      color: 'white',
    },
  },
  containerDesktop: {
    marginTop: '45px',
    padding: '20px',
    borderRadius: '20px',
  },
  titleDesktop: {
    color: 'black',
    cursor: 'pointer',
    ':hover': {
      color: 'white'
    },
    ':target': {
      color: 'red'
    }
  },

  mainM: {
    transition: '0.3s',
   
  }
}
