import { useEffect, useContext, useState } from 'react';
import { BookingContext } from '../../contexts/BookingContext'
import { UserContext } from '../../contexts/UserContext'
import BookingRecieptPage from '../../pages/BookingRecieptPage'
import Radium from 'radium'
import Grid from '@material-ui/core/Grid'


function Bookings() {
  const { myBookings } = useContext(BookingContext)
  const [isMyBookings, setIsMyBookings] = useState(false)
  const [bookId, setBookId] = useState('')
  const [showDetailedPage, setShowDetailedPage] = useState(false)

  useEffect(async () => {
    if (myBookings.length > 0) {
      setIsMyBookings(true)
    } 
  }, [myBookings])

  const openDetailPage = (bookId) => {
    setShowDetailedPage(true)
    setBookId(bookId)
  }

  const closeDetailPage = () => {
    setShowDetailedPage(false)
  }

  const structureBookings = (b, i) => 
  (
    <Grid item xs style={style.item} key={"a" + i} onClick={() => openDetailPage(b._id)}>
      <img style={style.img} key={"b" + i} src={b.houseId.pics[0]} />
      <div style={style.info} key={"c" + i}>
        <h2 style={style.infoText} key={"d" + i}>{b.houseId.city}</h2>
        <p style={style.infoText} key={"v" + i}>{new Date(b.startDate).toString().substr(0, 11)} - {new Date(b.endDate).toString().substr(0, 11)}
        </p>
        <br />
        <p style={{ margin: '5px 0 5px 15px'}} key={"e" + i}>
          See more details...
          </p>
      </div>
    </Grid>
  )

  return (
    <div className="Bookings">
      <Grid container direction="column" alignItems="center">
        <h2>My Bookings Page</h2>
        {isMyBookings ? myBookings.map((b, i) => structureBookings(b, i)) : <h3 style={style.noBook}>Here will your future bookings be...</h3>}
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
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 8px 6px -6px black',
  },
  info: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255, 0.9)',
    width: 'calc(100% - 20px)',

    height: '90px',
    bottom: '14px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    transition: 'all 500ms ease-in-out',
    overflow: 'hidden',
    ':hover': {
      height: '140px',
      cursor: 'pointer',
    }
  },
  infoText: {
    margin: '5px 0 5px 10px',
    lineHeight: '150%',
    letterSpacing: '1px',
  },
  noBook: {
    marginTop: '60px'
  }
}