import { useEffect, useContext, useState } from 'react';
import { BookingContext } from '../../contexts/BookingContext'
import { UserContext } from '../../contexts/UserContext'
import BookingRecieptPage from '../../pages/BookingRecieptPage'
import Radium from 'radium'
import Grid from '@material-ui/core/Grid'


function Bookings() {
  const { myBookings, fetchMyBookingsByUserId } = useContext(BookingContext)
  const { isLoggedIn } = useContext(UserContext)

  const [bookId, setBookId] = useState('')

  const [showDetailedPage, setShowDetailedPage] = useState(false)
  


  useEffect(async () => {
    await fetchMyBookingsByUserId(isLoggedIn[0]._id)
    console.log('My bookings is now use effect', myBookings)
  }, [])


  const openDetailPage = (bookId) => {

    setShowDetailedPage(true)
    setBookId(bookId)
    // setHouseId(houseId)
    // setStartDate(localStorage.getItem("startDateChosen"))
    // setEndDate(localStorage.getItem("endDateChosen"))
  }

  const closeDetailPage = () => {
    setShowDetailedPage(false)
  }
  

  const structureBookings = (b, i) =>

  (
    <Grid item xs style={style.item} key={"a" + i} onClick = {() => openDetailPage(b._id)}>
      <img style={style.img} key={"b" + i} src={b.houseId.pics[0]} />
      <div style={style.info} key={"c" + i}>
        <div style={style.infoText} key={"d" + i}>
          <h3>{b.houseId.city}</h3>
          <a>{new Date(b.startDate).toString().substr(0, 11)} - {new Date(b.endDate).toString().substr(0, 11)}
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
        {myBookings.length > 0 ? myBookings.map((b, i) => structureBookings(b, i)) : <h3 style={style.noBook}>Here will your future bookings be...</h3>}
      </Grid>
      {showDetailedPage ? <BookingRecieptPage bookId={bookId} closeModal={closeDetailPage} /> : ''}
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
      height: '110px',
      cursor: 'pointer',
      transition: 'all 500ms ease-in-out',
    }
  },
  infoText: {
    margin: '5px 0 5px 10px',
    lineHeight: '150%',
    letterSpacing: '5px',
  },
  noBook: {
    marginTop: '60px'
  }
}