import Radium from 'radium'
import { useEffect, useState } from 'react'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'




function MenuContainer(props) {
  const [newAction, setNewAction] = useState('showBookings')

  useEffect(() => {
    props.getNewAction(newAction)
  }, [newAction])

  return (
    <>
      <Hidden smUp>
        <Grid container spacing={1} direction="row" style={style.containerMobile} key="1" justify="space-around" alignItems="center">
          <Grid item xs>
            <h4 style={style.titleMobile} key="2" onClick={() => { setNewAction('showBookings') }}>My bookings</h4>
          </Grid>
          <Grid item xs><h4 style={style.titleMobile} key="3" onClick={() => { setNewAction('showRentals') }}>My Rentals</h4></Grid>
          <Grid item xs><h4 style={style.titleMobile} key="4" onClick={() => { setNewAction('showNewRental') }}>Add new rental</h4></Grid>
        </Grid>
      </Hidden>

      <Hidden xsDown>
        <Grid container spacing={3} direction="column" style={style.containerDesktop} key="5">
          <Grid item xs>
            <h3 style={style.titleDesktop} key="6" onClick={() => { setNewAction('showBookings') }}>My bookings</h3>
          </Grid>
          <Grid item xs><h3 style={style.titleDesktop} key="7" onClick={() => { setNewAction('showRentals') }}>My rentals</h3></Grid>
          <Grid item xs><h3 style={style.titleDesktop} key="8" onClick={() => { setNewAction('showNewRental') }}>Add new rental</h3></Grid>
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
  },
  titleMobile: {
    textAlign: 'center',
    padding: '10px 5px 10px 5px',
    color: 'black',
    cursor: 'pointer',
    margin: '0 1px',
    ':hover': {
      backgroundColor: 'white',
      
    }
  },
  containerDesktop: {
    backgroundColor: 'grey',
    marginTop: '30px',
    padding: '20px',
    borderRadius: '20px',
  },
  titleDesktop: {
    color: 'black',
    cursor: 'pointer',
    ':hover': {
      color: 'white'
    }
  },
}
