import { useEffect, useContext } from 'react';
import { BookingContext } from '../../contexts/BookingContext'
import Radium from 'radium'
import Grid from '@material-ui/core/Grid'


function Bookings() {
  const { myBookings, fetchMyBookingsByUserId, deleteBookingById } = useContext(BookingContext)

  useEffect(async () => {
    console.log('Something has changed in my bookings')
    await fetchMyBookingsByUserId('6047715d04ac3c37f09f7f10')
  }, [])

  useEffect(() => {
    console.log('My bookings is now', myBookings)
  }, [myBookings])

  const structureBookings = (b, i) =>
  (
    <Grid item xs style={style.item} key={"a" + i}>
      <img style={style.img} key={"b" + i} src={b.houseId.pics[0]} />
      <div style={style.info} key={"c" + i}>
        <div style={style.infoText} key={"d" + i}>
          <h3>{b.houseId.city}</h3>
          <a>{new Date(b.startDate * 1000).toLocaleString().substr(0, 11)} - {new Date(b.endDate * 1000).toLocaleString().substr(0, 11)}
          </a>
          <br />
          <br />
          <a style={style.infoMore} key={"e" + i}>
            See more details...
          </a>
        </div>
      </div>
    </Grid>
  )

  return (
    <div className="Bookings">
      <Grid container direction="column" alignItems="center">
        <h2>My Bookings Page</h2>
        {myBookings.map((b, i) => structureBookings(b, i))}
      </Grid>
    </div>
  )
}

export default Radium(Bookings);

const style = {
  item: {
    position: 'relative',
    margin: '5px',
    padding: '10px',
  },
  img: {
    width: '300px',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 8px 6px -6px black',
  },
  info: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255, 0.8)',
    width: '300px',
    height: '60px',
    bottom: '14px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    transition: 'all 500ms ease-in-out',
    overflow: 'hidden',
    ':hover': {
      height: '100px',
      cursor: 'pointer',
      transition: 'all 500ms ease-in-out'
    }
  },
  infoText: {
    margin: '5px 0 5px 10px',
    lineHeight: '150%',
    letterSpacing: '5px',
  }
}