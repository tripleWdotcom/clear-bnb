import Radium from 'radium'
import { useEffect, useState } from 'react'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import Burger from '../components/Hamburger.jsx'


function MenuContainer(props) {

  const sendNewAction = (newAction) => {
    props.getNewAction(newAction)
  }

  return (
    <>
      <Hidden smUp>
        <Grid container direction="column" style={style.containerMobile} key="1" justify="space-around">
          <Burger>
          <Grid item xs>
            <h4 style={style.titleMobile} key="2" onClick={() => { sendNewAction('showBookings') }}>My bookings</h4>
          </Grid>
          <Grid item xs><h4 style={style.titleMobile} key="3" onClick={() => { sendNewAction('showRentals') }}>My Rentals</h4></Grid>
            <Grid item xs><h4 style={style.titleMobile} key="4" onClick={() => { sendNewAction('showNewRental') }}>Add new rental</h4></Grid>
            </Burger>
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
    backgroundColor: 'purple',
    zIndex: '10',
    position: 'fixed',
    right: '0',
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
}
