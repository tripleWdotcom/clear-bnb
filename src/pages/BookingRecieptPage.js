
import { useContext, useEffect, useState } from 'react';
import DetailedComponent from '../components/DetailedComponent'
import Radium from 'radium'
import { UserContext } from '../contexts/UserContext'
import { FeatureContext } from '../contexts/FeatureContext'
import { BookingContext } from '../contexts/BookingContext'
import { HouseContext } from '../contexts/HouseContext'
import { useHistory } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden'


function BookingRecieptPage(props) {
  // let history = useHistory();
  // const { isLoggedIn } = useContext(UserContext)
  const { myBookings } = useContext(BookingContext)

  const { users } = useContext(UserContext)
  const { features } = useContext(FeatureContext)
  const [houseFeatures, setHouseFeatures] = useState([])
  const [startDate, setStartDate] = useState(0)
  const [endDate, setEndDate] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [houseObj, setHouseObj] = useState('')
  const [numOfDays, setNumOfDays] = useState(0)

  useEffect(() => {
    getNewHouse();
  }, [])

  const getNewHouse = () => {
    let thisBooking = myBookings.filter(b => b._id === props.bookId)
    // Deep copy the array 
    let copyOfBooking = JSON.parse(JSON.stringify(thisBooking))
    let strArray = copyOfBooking[0].houseId.featureIds;

    for (let i = 0; i < strArray.length; i++) {
      let featObj = features.filter(f => f._id === strArray[i])
      strArray[i] = featObj[0]
    }
    // Who is the host?
    let hostId = copyOfBooking[0].houseId.userId
    let hostObj = users.filter(u => u._id === hostId)
    // Fill the feature objects
    copyOfBooking[0].houseId.featureIds = strArray
    // Fill the host object
    copyOfBooking[0].houseId.userId = hostObj[0]
    setHouseObj(copyOfBooking[0].houseId)
    setStartDate(copyOfBooking[0].startDate)
    setEndDate(copyOfBooking[0].endDate)
    setTotalPrice(copyOfBooking[0].totalPrice)

    let numOfDays = ((copyOfBooking[0].endDate - copyOfBooking[0].startDate) / 3600 / 1000) / 24
    setNumOfDays(numOfDays)
  }


  return (

    <div className="popup" style={styles.popup} key="1">

      <Hidden xsDown>
        <div style={styles.popupInnerComputer}>
          <button style={styles.closeBtn} key="2" onClick={() => props.closeModal()}>Close</button>
          <DetailedComponent houseObj={[houseObj]} path="bookings" />
          <div style={styles.dates} key="3">
            <h2>Booking details</h2>
            <br />
            <div style={styles.infoBox} key="7">
              <h3>Booking number</h3>
              <br />
              <p>#{props.bookId}</p>
              <br />
              <h3>Chosen dates</h3>
              <br />
              <p>{numOfDays} {numOfDays < 2 ? 'night' : 'nights'}, {new Date(parseInt(startDate)).toLocaleString().substr(0, 11)} - {new Date(parseInt(endDate)).toLocaleString().substr(0, 11)}</p>
              <br />
              <h3>Total price</h3>
              <br />
              <p>{totalPrice} €</p>
            </div>
          </div>
        </div>
      </Hidden>

      <Hidden smUp>
        <div style={styles.popupInnerMobile} key="5">
          <button style={styles.closeBtn} key="6" onClick={() => props.closeModal()}>Close</button>
          <DetailedComponent houseObj={[houseObj]} path="booking" />
          <div style={styles.dates} key="10">
            <h2>Booking details</h2>
            <br />
            <div style={styles.infoBoxMobile} key="12">
              <h3>Booking number</h3>
              <br />
              <p>#{props.bookId}</p>
              <br />
              <h3>Chosen dates</h3>
              <br />
              <p>{new Date(parseInt(startDate)).toLocaleString().substr(0, 11)} - {new Date(parseInt(endDate)).toLocaleString().substr(0, 11)}</p>
              <br />
              <h3>Total price</h3>
              <br />
              <p>{totalPrice} €</p>
            </div>
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
    textAlign: 'center',
  },
  popupInnerComputer: {
    position: 'relative',
    // padding: '300px 0px 300px 0px',
    width: '70vw',
    height: '100vh',
    backgroundColor: 'whitesmoke',
    overflow: 'scroll',
    textAlign: 'center',
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
    margin: '10px',
  },
  infoBox: {
    textAlign: 'left',
    borderRadius: '5px',
    border: '1px solid grey',
    width: '30vw',
    padding: '10px',
    alignItems: 'center',
    margin: '0 auto',
  },
  infoBoxMobile: {
    textAlign: 'left',
    borderRadius: '5px',
    border: '1px solid grey',
    padding: '10px',
    alignItems: 'center',

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

export default Radium(BookingRecieptPage);