import React, { useState, useEffect } from 'react';
import Bookings from '../components/MyPages/Bookings.js'
import MyRentals from '../components/MyPages/MyRentals.js'
import AddNewRental from '../components/MyPages/AddNewRental.js'
import Radium from 'radium'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import Menu from '../components/Menu'

function MyPage() {

  const [action, setAction] = useState('showBookings')
  const [width, setWidth] = useState(window.innerWidth)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuShowing, setMenuShowing] = useState()

  const changeAction = (newAction) => {
    setAction(newAction)
  }

  useEffect(() => {
    console.log('The new action is: ', action)
    setIsMenuOpen(false)
    // if (open === true) {
    //   console.log('Btn exist and open is', open)
    //   setOpen(!open)
    // }
    // console.log('Does the menu button exist?', btn)
  }, [action])

  const toggleMenu = () => {
    console.log('Pushing menu button, button is open:', isMenuOpen)
    setIsMenuOpen(!isMenuOpen)
  }

  // useEffect(() => {
  //   showContent()
  // }, [isMenuOpen])

  // function showContent() {
  //   let content = isMenuOpen ?  : ''
  //   setMenuShowing(content)
  // }

  return (
    <>
      <Hidden smUp>
        <Grid container style={style.container} wrap="nowrap" direction="column" key="1" justify="center">
          <button onClick={toggleMenu}>Menu</button>
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
          <Grid item xs={1}><div style={style.line}></div></Grid>
          <Grid item xs={7}>
            {action === 'showBookings' ? <Bookings /> : ''}
            {action === 'showRentals' ? <MyRentals /> : ''}
            {action === 'showNewRental' ? <AddNewRental /> : ''}
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
