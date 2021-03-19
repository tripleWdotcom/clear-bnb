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
  const [open, setOpen] = useState(false)
  const [showingContent, setShowingContent] = useState(<Bookings />)

  const changeAction = (newAction) => {
    setAction(newAction)
  }

  useEffect(() => {
    console.log('The new action is: ', action)
    // if (open === true) {
    //   console.log('Btn exist and open is', open)
    //   setOpen(!open)
    // }
    // console.log('Does the menu button exist?', btn)
  }, [action])

  // const toggleMenu = () => {
  //   console.log('Pushing menu button, button is open:', open)
  //   setOpen(!open)
  // }

  // useEffect(() => {
  //   console.log('Open is', open)
  //   showContent()
  // }, [open])

  // const showContent = () => {
  //   setShowingContent(open ? <Menu getNewAction = { changeAction } style = {style.mobileMenu } /> :
  //   (action === 'showBookings' ? <Bookings /> : action === 'showRentals' ? <MyRentals /> : action === 'showNewRental' ? <AddNewRental /> : ''))
  // }

  return (
    <>
      <Hidden smUp>
        <Grid container spacing={8} style={style.container} wrap="nowrap" direction="column" key="1">
            <Menu getNewAction={changeAction} />
          <Grid item xs>
            {action === 'showBookings' ? <Bookings /> : ''}
            {action === 'showRentals' ? <MyRentals /> : ''}
            {action === 'showNewRental' ? <AddNewRental /> : ''}
          </Grid>
        </Grid>
      </Hidden>


      <Hidden xsDown>
        <Grid container spacing={8} style={style.container} wrap="nowrap" direction="row" key="2">
          <Hidden xsDown>
            <Grid item xs={4} style={style.desktopMenu} key="1">
              <Menu getNewAction={changeAction} />
            </Grid>
          </Hidden>
          <Grid item xs={8}>
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
  },
  mobileMenu: {

  },
  desktopMenu: {

  }
}
