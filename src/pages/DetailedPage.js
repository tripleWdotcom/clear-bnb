
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
  const { addNewBooking} = useContext(BookingContext)
  const { housesByCityAndDate } = useContext(HouseContext)
  const [totalPrice, setTotalPrice] = useState(0)
  const [notLoggedIn, setNotLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState([])

  useEffect(() => {
    let houseObj = housesByCityAndDate.filter(h => h._id === props.houseId)
    let numOfDays = ((props.endDate - props.startDate) / 3600 / 1000) / 24
    setTotalPrice(houseObj[0].price * numOfDays)
  }, [])

  useEffect(() => {
    setCurrentUser([isLoggedIn[0]])
  }, [isLoggedIn])

  const createBooking = async () => {

    if (currentUser[0] === undefined) {
      setNotLoggedIn(true)
    } else {
      let newBooking = {
        houseId: props.houseId,
        userId: isLoggedIn[0]._id,
        startDate: props.startDate,
        endDate: props.endDate,
        totalPrice: totalPrice
      }
      await addNewBooking(newBooking)
      props.closeModal()
      history.push('/mypage')
    }
  }

  return (

    <div className="popup" style={styles.popup} key="1">

      <Hidden xsDown>
        <div style={styles.popupInnerComputer}>
          <button style={styles.closeBtn} key="2" onClick={() => props.closeModal()}>Close</button>
          <DetailedComponent houseId={props.houseId} path="results" />
          <div style={styles.dates} key="3">
            <h2>Booking information</h2>
            <br />
            <h3>Chosen dates</h3>
            <br />
            <p>{new Date(parseInt(props.startDate)).toLocaleDateString('en-GB').substr(0, 11)} - {new Date(parseInt(props.endDate)).toLocaleDateString('en-GB').substr(0, 11)}</p>
            <br />
            <h3>Total price</h3>
            <br />
            <p>{totalPrice} €</p>
            <button style={styles.bookBtn} key="4" onClick={createBooking}>Book</button>
            <br />
            {notLoggedIn ? 'Log in to book this house' : ''}<p></p>
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
    backgroundColor: '#005751',
    margin: '15px',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'all 500ms ease-in-out',
    ':hover': {
      backgroundColor: '#047361',
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

}

export default Radium(DetailedPage);