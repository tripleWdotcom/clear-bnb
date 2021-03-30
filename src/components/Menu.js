import Radium from 'radium'
import { useState } from 'react'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'


function MenuContainer(props) {

  const sendNewAction = (newAction) => {
    props.getNewAction(newAction)
  }

  return (
    <>
      <Hidden smUp>
        <Grid container direction="column" style={style.containerMobile} key="1" justify="space-around">
          <Grid item xs>
            <h4 style={style.titleMobile} key="2" onClick={() => { sendNewAction('showBookings') }}>My bookings</h4>
          </Grid>
          <Grid item xs><h4 style={style.titleMobile} key="3" onClick={() => { sendNewAction('showRentals') }}>My Rentals</h4></Grid>
          <Grid item xs><h4 style={style.titleMobile} key="4" onClick={() => { sendNewAction('showNewRental') }}>Add new rental</h4></Grid>
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
    backgroundColor: 'whitesmoke',
    zIndex: '10',
    position: 'absolute',
    right: '0',
    top: '150px',
  },
  titleMobile: {
    padding: '10px 5px 10px 5px',
    cursor: 'pointer',
    margin: '0 1px',
    ':hover': {
      color: '#0D4C80',
      transform: 'scale(1.05)'
    },
  },
  containerDesktop: {
    marginTop: '45px',
    padding: '20px',
    borderRadius: '20px',
    backgroundColor: 'white',
    opacity: '0.9'
  },
  titleDesktop: {
    transition: 'all 500ms ease-in-out',
    cursor: 'pointer',
    ':hover': {
      color: '#0D4C80',
      transform: 'scale(1.05)'
    },
  },

}
