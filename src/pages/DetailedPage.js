
import { useContext, useEffect, useState } from 'react';
import DetailedComponent from '../components/DetailedComponent'
import Radium from 'radium'
import { UserContext } from '../contexts/UserContext'
import { BookingContext } from '../contexts/BookingContext'
import { HouseContext } from '../contexts/HouseContext'
import { useHistory } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden'


function DetailedPage(props) {
  let history = useHistory();
  const { isLoggedIn } = useContext(UserContext)
  const { addNewBooking } = useContext(BookingContext)
  const { housesByCityAndDate } = useContext(HouseContext)
  const [totalPrice, setTotalPrice] = useState(0)
  const [notLoggedIn, setNotLoggedIn] = useState(false)

  useEffect(() => {
    let houseObj = housesByCityAndDate.filter(h => h._id === props.houseId)
    let numOfDays = ((props.endDate - props.startDate) / 3600 / 1000) / 24
    setTotalPrice(houseObj[0].price * numOfDays)
  }, [])

  const createBooking = async () => {

    if (!isLoggedIn.length || isLoggedIn == undefined) {
      console.log('You are not logged in ')
      setNotLoggedIn(true)
    } else {
      console.log('Who is logged in', isLoggedIn)
      let newBooking = {
        houseId: props.houseId,
        userId: isLoggedIn[0]._id,
        startDate: props.startDate,
        endDate: props.endDate,
        totalPrice: totalPrice
      }
      await addNewBooking(newBooking)
      props.closeModal()
      console.log('The new booking obj is', newBooking)
    }
  }



  return (

    <div className="popup" style={styles.popup} key="1">

      <Hidden xsDown>
      <div style={styles.popupInnerComputer}>
          <button style={styles.closeBtn} key="2" onClick={() => props.closeModal()}>Close</button>
        <DetailedComponent houseId={props.houseId} path="results"/>
          <div style={styles.dates} key="3">
          <h2>Booking information</h2>
          <br />
          <h3>Chosen dates</h3>
          <br />
          <p>{new Date(parseInt(props.startDate)).toLocaleString().substr(0, 11)} - {new Date(parseInt(props.endDate)).toLocaleString().substr(0, 11)}</p>
          <br />
          <h3>Total price</h3>
          <br />
          <p>{totalPrice} €</p>
            <button style={styles.bookBtn} key="4" onClick={createBooking}>Book</button>
          <br />
          { notLoggedIn ? 'Log in to book this house' : ''}<p></p>
        </div>
        </div>
      </Hidden>

      <Hidden smUp>
        <div style={styles.popupInnerMobile} key="5">
          <button style={styles.closeBtn} key="6" onClick={() => props.closeModal()}>Close</button>
          <DetailedComponent houseId={props.houseId} path="results" />
          <div style={styles.dates} key="7">
            <h2>Booking information</h2>
            <br />
            <h3>Chosen dates</h3>
            <br />
            <p>{new Date(parseInt(props.startDate)).toLocaleString().substr(0, 11)} - {new Date(parseInt(props.endDate)).toLocaleString().substr(0, 11)}</p>
            <br />
            <h3>Total price</h3>
            <br />
            <p>{totalPrice} €</p>
            <button style={styles.bookBtn} key="8" onClick={createBooking}>Book</button>
            <br />
            {notLoggedIn ? 'Log in to book this house' : ''}<p></p>
          </div>
        </div>
      </Hidden>


    </div>
  )
}


const styles = {

  popup: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '10'

  },
  popupInnerMobile: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundColor: '#FFF',
    overflow: 'scroll',
  },
  popupInnerComputer: {
    position: 'relative',
    // padding: '300px 0px 300px 0px',
    width: '70vw',
    height: '100vh',
    backgroundColor: 'whitesmoke',
    overflow: 'scroll',

  },

  closeBtn: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    cursor: 'pointer'
  },

  gallery: {
    width: 'auto',
    height: '500px',

  },

  mobileGallery: {
    width: 'auto',
    height: '250px',
    padding: '25px'
  },
  dates: {
    margin: '10px'
  },
  bookBtn: {
    backgroundColor: 'crimson',
    margin: '15px',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'all 500ms ease-in-out',
    ':hover': {
      backgroundColor: '#F0524F',
      transform: 'scale(1.05)'
    }
  },
  closeBtn: {
    margin: '15px',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: 'whitesmoke',
    outline: 'none',
  }

  // thumbnails: {
  //   width: 'auto',
  //   height: '100px',
  //   border: '2px solid #C0C0C0',
  //   padding: '5px',
  //   cursor: 'pointer',
  //   boxShadow: '0 0 6px 2px rgb(22, 22, 22)',
  //   margin: '5px'

  // }

}

export default Radium(DetailedPage);