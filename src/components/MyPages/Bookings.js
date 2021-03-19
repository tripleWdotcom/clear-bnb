import { useEffect, useContext } from 'react';
import { BookingContext } from '../../contexts/BookingContext'


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
    <div style={style.item} key={i}>
      <img style={style.img} key={i} src={b.houseId.pics[0]} /><div style={style.info}>Info</div>
    </div>
  )

  return (
    <div className="Bookings">
      <h2>My Bookings Page</h2>
      <div>
        {myBookings.map((b, i) => structureBookings(b, i))}
      </div>
    </div>
  )
}

export default Bookings;

const style = {
  item: {
    margin: '5px',
    padding: '10px',
  },
  img: {
    width: '300px',
    height: 'auto',
    alignItems: 'center'
  },
  info: {
    width: '150px',
    height: 'auto',
    backgroundColor: 'blue',
    float: 'right'
  },
}