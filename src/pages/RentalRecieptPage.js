import { useContext, useEffect, useState } from 'react';
import DetailedComponent from '../components/DetailedComponent'
import Radium from 'radium'
import { HouseContext } from '../contexts/HouseContext'
import Hidden from '@material-ui/core/Hidden'


function RentalRecieptPage(props) {
  const { myRentals } = useContext(HouseContext)
  const [houseObj, setHouseObj] = useState([])
  const [isOffer, setIsOffer] = useState(false)


  useEffect(() => {
    let thisRental = myRentals.filter(r => r._id === props.rentalId)
    setHouseObj(thisRental)
    setIsOffer(thisRental[0].isOffer)
  }, [])

  return (

    <div className="popup" style={styles.popup} key="1">

      <Hidden xsDown>
        <div style={styles.popupInnerComputer}>
          <button style={styles.closeBtn} key="255" onClick={() => props.closeModal()}>Close</button>
          <DetailedComponent houseObj={houseObj} path="bookings" />
          <div style={styles.dates} key="3">
            <h2>Rental details</h2>
            <br />
            <div style={styles.infoBox} key="7">
              <h3>Chosen date ranges</h3>
              <br />
              {houseObj.length > 0 ? houseObj[0].dateRanges.map(d => (<><p>{new Date(parseInt(d.availableStart)).toLocaleDateString('en-GB')} - {new Date(parseInt(d.availableEnd)).toLocaleDateString('en-GB')}</p><br /></>)) : ''}
              {isOffer ? <><br /><h4 style={{ backgroundColor: 'crimson', color: 'white', border: 'none', borderRadius: '5px', padding: '5px', textAlign: 'center' }}>You've made this rental as a special offer!</h4></> : ''}
            </div>
          </div>
        </div>
      </Hidden>

      <Hidden smUp>
        <div style={styles.popupInnerMobile} key="5">
          <button style={styles.closeBtn} key="200" onClick={() => props.closeModal()}>Close</button>
          <DetailedComponent houseObj={houseObj} path="booking" />
          <div style={styles.dates} key="10">
            <h2>Booking details</h2>
            <br />
            <div style={styles.infoBoxMobile} key="12">
              <br />
              <h3>Chosen date ranges</h3>
              <br />
              {houseObj.length > 0 ? houseObj[0].dateRanges.map(d => (<><p>{new Date(parseInt(d.availableStart)).toLocaleDateString('en-GB')} - {new Date(parseInt(d.availableEnd)).toLocaleDateString('en-GB')}</p><br /></>)) : ''}
              {isOffer ? <><br /><h4 style={{ backgroundColor: 'crimson', color: 'white', border: 'none', borderRadius: '5px', padding: '5px', textAlign: 'center' }}>You've made this rental as a special offer!</h4></> : ''}
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
    margin: '0 auto'

    // borderRadius: '5px', color: 'grey', margin: '50px auto'
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

export default Radium(RentalRecieptPage);