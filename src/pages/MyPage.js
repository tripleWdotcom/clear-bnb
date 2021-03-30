import React, { useState, useEffect, useContext } from 'react';
import Bookings from '../components/MyPages/Bookings'
import MyRentals from '../components/MyPages/MyRentals'
import AddNewRental from '../components/MyPages/AddNewRental'
import { UserContext } from '../contexts/UserContext'
import { BookingContext } from '../contexts/BookingContext'
import Radium from 'radium'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import Menu from '../components/Menu'
import MenuIcon from '@material-ui/icons/Menu';


function MyPage() {

  const [action, setAction] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isLoggedIn} = useContext(UserContext)
  const { myBookings, fetchMyBookingsByUserId } = useContext(BookingContext)

  useEffect(async () => {
    await fetchMyBookingsByUserId(isLoggedIn[0]._id)
    setAction('showBookings') 
  }, [])

  const changeAction = (newAction) => {
    setAction(newAction)
  }

  useEffect(async () => {
    setIsMenuOpen(false)
  }, [action])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <Hidden smUp>
        <Grid container style={style.container} wrap="nowrap" direction="column" key="1" justifyContent="center">
          <button style={{fontSize: 'large', marginBottom: '30px', backgroundColor: 'white', border: '1px solid grey', borderRadius: '5px'}} onClick={toggleMenu}><MenuIcon /></button>
          <Grid item xs>
            {isMenuOpen ? <Menu getNewAction={changeAction} /> : ''}
            {action === 'showBookings' ? <Bookings /> : ''}
            {action === 'showRentals' ? <MyRentals /> : ''}
            {action === 'showNewRental' ? <AddNewRental setNewAction={changeAction} /> : ''}
          </Grid>
        </Grid>
      </Hidden>


      <Hidden xsDown>
        <Grid container
          spacing={8}
          style={style.container}
          wrap="nowrap"
          direction="row"
          key="2"
        >
          <Grid item xs={4} key="1">
            <Menu getNewAction={changeAction} />
          </Grid>
 
          <Grid item xs={8}>
            {action === 'showBookings' ? <Bookings /> : ''}
            {action === 'showRentals' ? <MyRentals /> : ''}
            {action === 'showNewRental' ? <AddNewRental setNewAction={changeAction} /> : ''}
          </Grid>
        </Grid>
      </Hidden>
    </>
  )
}

export default Radium(MyPage)

const style = {
  container: {
    width: '100%',
    marginTop: '30px'
  },
  mobileMenu: {
    transform: 'translateX(0%)',
    transition: 'all 500ms ease-in-out',
    ':after': {
      backgroundColor: 'pink',
      transform: 'translateX(-100%)',
    },
  },
  desktopMenu: {

  },
  line: {
    height: '300px',
    width: '5px',
    background: 'linear-gradient(to top, transparent 1%, gray 50%, transparent 100%)'
  }
}
